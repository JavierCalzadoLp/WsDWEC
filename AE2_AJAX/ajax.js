//El primer paso y muy importante, es realizar la comprobación de que nuestro HTML está correctamente enlazado con nuestro JS
//para ello imprimimos la siguiente palabra por consola en la web, si aparece, es que todo está correcto
console.log("activo");

//EMPEZAMOS A TRABAJAR CON AJAX
//En primer lugar, jugando con DOM, con querySelector apuntamos al id del primer button MOSTRAR TAMAÑO y 
//añadimos un evento, que cuando hagamos CLICK en el botón MOSTRAR TAMAÑO, se ejecute la función traerDatos()

document.querySelector('#boton').addEventListener('click', traerDatos);

//Creamos la funcion traerDatos, para ello en primer lugar vamos a hacer un console.log para comprobar que funciona correctamente.

function traerDatos(){
    console.log("esto funciona");

    //Creamos el objeto XMLhttpRequest

    const xhttp = new XMLHttpRequest();

    //Realizaremos una peticion ASINCRONA, por lo tanto, en OPEN invocamos el metodo GET, añadimos tambien el fichero JSON del 
    //cual vamos a extraer la informacion y le decimos que es TRUE para que sea ASINCRONA

    xhttp.open('GET', 'tamano.json', true);
    xhttp.send(null);

    //esta funcion se va a ejecutar cada vez que haya un cambio en la propiedad readystate
    //Solo cuando la respuesta eté completa y su estado sea OK leeremos el JSON del servidor y lo procesaremos

    xhttp.onreadystatechange = function(){
        //este es uno de los pasos mas importantes, ya que aquí lo que decimos que solo cuando la respuesta este completa readyState==4
        //y status == 200 , entonces procesamos lo demas
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            //muy importante ir haciendo comprobaciones en consola para ver los datos que vamos imprimiendo

            let datos = JSON.parse(this.responseText);
            console.log(datos);
            //a continuación creamos una variable llamada datos, para hacer un parse a responseText, ya que del servidor
            //la informacion viene en formato texto y hay que pasarla a objeto JSON

            //creamos otra variable llamada 'res' de respuesta, la cual apuntara al primer fieldset con id="res"
            //ya que es ahí, donde queremos que pinte la información transformada
            let res = document.querySelector('#res');
            res.innerHTML = ''; 
            //esto es para volver a limpiar cada vez q se ejecute el for

            for (let item of datos){
                console.log(item.tamano);

                //creamos un bucle FOR para recorrer el array, queremos que por cada iteración, añada al formulario el label
                //el tamaño y un input
                //esto se realiza de la siguiente forma:
                res.innerHTML += `<label>${item.tamano}<input type="radio" value="tamano" name="tamano"></label><br>`

            }
        }
    }

}

//A continuación, hemos hecho el mismo proceso anterior, solo que hemos utilizado el JSON ingredientes
//y los hemos sacado al formulario como checkbox

//Apuntar al boton2 y añadir evento click para que se ejecute la funcion cuando pulsemos el boton
document.querySelector('#boton2').addEventListener('click', traerIngredientes);

function traerIngredientes(){
    console.log("hola esto funciona");

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'ingredientes.json', true);
    xhttp.send(null);

    xhttp.onreadystatechange = function(){
        //este es uno de los pasos mas importantes, ya que aquí lo que decimos que solo cuando la respuesta este completa readyState==4
        //y status == 200 , entonces procesamos lo demas
        if(this.readyState == 4 && this.status == 200){
            let datos2 = JSON.parse(this.responseText);

            let rest = document.querySelector('#rest');
            rest.innerHTML = '';
            //esto es para volver a limpiar cada vez q se ejecute el for

            for (let item2 of datos2){
                rest.innerHTML += `<label>${item2.ingredientes}<input type="checkbox" value="ingredientes" name="ingredientes"></label><br>`
            }
        }
    }
}

//A continuación, vamos a crear la funcion REFRESCAR, para la creación de esta función hemos hecho algo parecido a lo de arriba,
//en primer lugar apuntamos al boton refrescar y añadimos el evento para que ejecute la funcion

document.querySelector('#btnRefrescar').addEventListener('click', refrescar)

//La función refrescar hace una llamada a las funciones de arriba,
//y después lo que hacemos es VACIAR su contenido del DOM, de modo que cuando refrescamos
//parece que la página ha cargado de nuevo, pero sin embargo NO ha resfrescado,
//si no que la hemos vaciado utilizando AJAX

function refrescar() {
    console.log("esto funciona");

    traerDatos();
    res.innerHTML='';
    traerIngredientes();
    rest.innerHTML='';

}


//Esta función la vamos a utilizar para el requerimiento 2

//apuntamos al boton procesar pedido, y le añadimos el evento para que se ejecute la funcion cuando hagamos click
document.querySelector('#btnEnviar').addEventListener('click', hacerPedido);

//La funcion hacer pedido necesita recibir 2 archivos JSON, ya que necesita los precios por tamaño,
//y los precios por ingredientes
// por lo tanto, vamos a crear 2 objetos de XMLhttpRequest, ambos seran GET, pero uno viene de tamano.json y otro
//viene de ingredientes.json

function hacerPedido(){
    console.log("Hola esto tiene buena pinta!!");
    var precio;
    var precioIngredientes;

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'tamano.json', true);
    xhttp.send(null);

    //creamos la funcion onreadystatechange, parseamos los datos recibidos y crearemos un bucle donde intentaremos sacar los valores
    //de los radio y checkbox para poder sumarlos 

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datosPrecios = JSON.parse(this.responseText);

            console.log(datosPrecios)
            let result = document.querySelector('#resultado');
            result.innerHTML='';

            //este FOR, recorre el array de precios por tamaño, y comprueba si esta CHECKED, si lo está
            //precio es igual a precio checkeado

            for(let item3 of datosPrecios){
                console.log(item3.precio[0]);
                if(document.getElementsByName('Familiar').checked){
                    precio=15;
                }else
                if(document.getElementsByName('Mediana').checked){
                    precio=10;
                }else 
                if(document.getElementsByName('Pequena').checked){
                    precio=5;
                }
        
            }
        }
        
    }

    //creamos la funcion onreadystatechange, parseamos los datos recibidos y crearemos un bucle donde intentaremos sacar los valores
    //de los radio y checkbox para poder sumarlos 

    const xhttp2 = new XMLHttpRequest();
    xhttp.open('GET', 'ingredientes.json', true);
    xhttp.send(null);

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datosPrecios2 = JSON.parse(this.responseText);

            console.log(datosPrecios2);
            let resulta = document.querySelector('#resultado');
            resulta.innerHTML=" ";

            //este FOR recorre el array de precios 
            //mientras que los item precio esten checkeados, sumale 1 al precioIngredientes

            for(let item4 of datosPrecios2){
                //console.log(item4);
                while(item4.precio.checked){
                    precioIngredientes++;
                    break;
                }

            }

        }
    }

    //por ultimo, recogemos los valores de precio y precioIngredientes y los sacamos en una alerta cuando se pulse el botón Procesar Pedido
    
    var precioTotal = precio + precioIngredientes;

    alert('GRACIAS POR SU PEDIDO ' + "   " + precioTotal);


}


//Esta funcion la utilizamos para validar la informacion del formulario

window.onload = function(){
    formulario.onsubmit=validacion;
}
