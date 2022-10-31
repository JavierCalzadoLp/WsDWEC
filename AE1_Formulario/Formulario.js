
/*
* LA FUNCIÓN SUMATOTAL DEVUELVE EL COSTE TOTAL DE PIZZA EN UN INPUT 
*/

function sumaTotal(){

    //EN PRIMER LUGAR VAMOS A CREAR TANTAS VARIABLES COMO VALUES CORRESPONDIENTES TENEMOS,
    // Y LOS VAMOS A PARSEAR PARA CONVERTIRLOS EN ENTEROS

    let numero1 = parseInt(campo1.value)
    let numero2 = parseInt(campo2.value)
    let numero3 = parseInt(campo3.value)

    let numero4 = parseInt(campo4.value)
    let numero5 = parseInt(campo5.value)
    let numero6 = parseInt(campo6.value)
    let numero7 = parseInt(campo7.value)
    
    // PARA COGER EL VALOR SELECCIONADO VAMOS A CREAR CONDICIONALES, LOS CUALES COMPRUEBAN SI
    // EL VALOR DEL CAMPO ES EL CHECKEADO, SI LO ES DEVUELVE EL VALUE
    // SI NO, DEVUELVE 0

    if (campo1 == "checked"){
        return numero1
    } else numero1 = 0;
    if (campo2 == "checked"){
        return numero2;
    } else numero2 = 0;
    if (campo3 == "checked"){
        return numero3;
    }

    if(campo4 == "checked"){
        return numero4;
    } else numero4=0;
    if(campo5 == "checked"){
        return numero5;
    }else numero5=0;
    if(campo6 == "checked"){
        return numero6;
    }else numero6=0;
    if(campo7 == "checked"){
        return numero7;
    }

    // POR ULTIMO, HACEMOS LA SUMA TOTAL, LOS NO CHECKEADOS VALEN 0 Y LOS CHECKED VALE SU VALOR

    let resultado = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7)
    campo8.value = resultado + "€"


}

//LA FUNCIÓN VALIDAR VA A COMPROBAR CIERTOS VALORES DEL FORMULARIO, DE MODO QUE, NO ESTÉ INCOMPLETO
// Y TODO CUMPLA LAS CONDICIONES NECESARIAS
function validar(){
    //LAS PRIMERAS CUATRO CONDICIONES OBLIGAN AL USUARIO A RELLENAR LOS HUECOS DE TEXTO

    if (texto1.value.trim() == "" ){
        alert('[ERROR] Debe introducir su nombre');
        return false;
    }
    if (texto2.value.trim() == "" ){
        alert('[ERROR] Debe introducir su dirección');
        return false;
    }
    if (texto3.value.trim() == "" ){
        alert('[ERROR] Debe introducir su teléfono');
        return false;
    }
    if (texto4.value.trim() == "" ){
        alert('[ERROR] Debe introducir su email');
        return false;
    }
    //ESTA CONDICION OBLIGA AL USUARIO A SELECCIONAR AL MENOS UN TAMAÑO
    if (!tamaño.checked){
        alert('[ERROR] Debe seleccionar un tamaño');
        return false;
    }

    //ESTA CONDICIÓN OBLIGA AL USUARIO A SELECCIONAR AL MENOS UN INGREDIENTE
    if (!ingredientes.checked){
        alert('[ERROR] Debe seleccionar mínimo un ingrediente');
        return false;
    }
}


//ESTA FUNCIÓN VALIDA EL RESTO DE CONDICIONES ANTERIORES
//PARA PODER ENVIAR EL FORMULARIO
window.onload = function(){
    formulario.onbutton = validar;
}
