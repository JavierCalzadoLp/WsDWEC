
function comenzarCurso(){

    let titulo = document.createElement("h1") //<h1></h1>
    let texto = document.createTextNode("INSCRIPCIÓN A GRADO SUPERIOR - EDIX") // TEXTO ANTERIOR
    titulo.appendChild(texto) // <h1>TEXTO ANTERIOR</h1>
    cabecera.appendChild(titulo) // metemos todo esto al DIV id="cabecera" del HTML
    

    let parrafo = document.createElement("p") //<p></p>
    let texto1 = document.createTextNode("A continuación, indique sus datos") //texto anterior
    parrafo.appendChild(texto1) //<p>Texto anterior</p>
    cabecera.appendChild(parrafo) // metemos todo esto al DIV id="cabecera" del HTML

    //CREACIÓN DEL FORMULARIO

    let formulario = document.createElement("form") //<form></form>
    formulario.setAttribute("name", "formulario") //<form name="formulario"></form>
    formulario.setAttribute("id","formulario") //<form name="formulario" id="formulario"></form>
    formulario.setAttribute("action", "") //<form name="formulario" id="formulario" action=""></form>
    formulario.setAttribute("method","get") ////<form name="formulario" id="formulario" action="" method="get"></form>
    cabecera.appendChild(formulario)

    //CREACIÓN DEL FIELDSET

    let fiel = document.createElement("fieldset") //<fieldset></fieldset>
    formulario.appendChild(fiel)

    //CREACIÓN DEL LEGEND

    let lege = document.createElement("legend") //<legend></legend>
    let texto2 = document.createTextNode("DATOS PERSONALES") // DATOS PERSONALES
    lege.appendChild(texto2) //<legend>DATOS PERSONALES </legend>
    fiel.appendChild(lege)
    
    //CREACIÓN DEL PRIMER REQUERIMIENTO CAMPOS DE TEXTO

    //CAMPO DE TEXTO DNI
    let lab1 = document.createElement("label")//<label></label>
    let texto3 = document.createTextNode("DNI: ") //DNI:
    lab1.appendChild(texto3) // <label>DNI:</label>
    fiel.appendChild(lab1) //metemos lab1 dentro del fieldset

    let inp1 = document.createElement("input")//<input>
    inp1.setAttribute("type","text")//<input type="text" >
    inp1.setAttribute("value","")//<input type="text" value="" >
    inp1.setAttribute("name","dni")//<input type="text" value="" name="dni" >
    lab1.appendChild(inp1)// <label>DNI: <input type="text" value="" name="dni" ></label>

    let salt1 = document.createElement("br") //</br>
    fiel.appendChild(salt1) // creamos un salto de línea

    //CAMPO DE TEXTO NOMBRE
    let lab2 = document.createElement("label")//<label></label>
    let texto4 = document.createTextNode("Nombre: ") // Nombre
    lab2.appendChild(texto4) //<label>Nombre: </label>
    fiel.appendChild(lab2) //metemos el label2 dentro del fieldset 

    let inp2 = document.createElement("input") //<input>
    inp2.setAttribute("type","text")//<input type="text" >
    inp2.setAttribute("value","")//<input type="text" value="" >
    inp2.setAttribute("name","nomm")//<input type="text" value="" name="nomm" >
    lab2.appendChild(inp2) //<label>Nombre: //<input type="text" value="" name="nomm" ></label>

    let salt2 = document.createElement("br") //</br>
    fiel.appendChild(salt2) // creamos un salto de línea

    //CAMPO DE TEXTO APELLIDOS
    let lab3 = document.createElement("label")//<label></label>
    let texto5 = document.createTextNode("Apellidos: ") //Apellidos: 
    lab3.appendChild(texto5) //<label>Apellidos:</label>
    fiel.appendChild(lab3) // metemos el lab3 dentro del fieldset

    let inp3 = document.createElement("input") //<input >
    inp3.setAttribute("type","text")//<input type="text" >
    inp3.setAttribute("value","")//<input type="text" value="" >
    inp3.setAttribute("name","apell")//<input type="text" value="" name="apell" >
    lab3.appendChild(inp3) //<label>Apellidos:<input type="text" value="" name="apell" > </label>

    let salt3 = document.createElement("br") //</br>
    fiel.appendChild(salt3) // creamos un salto de línea
    
    //CAMPO DE TEXTO DIRECCION
    let lab4 = document.createElement("label")//<label></label>
    let texto6 = document.createTextNode("Dirección: ") //Direccion:
    lab4.appendChild(texto6) //<label>Direccion:</label>
    fiel.appendChild(lab4) //meter el lab4 dentro del fieldset

    let inp4 = document.createElement("input") //<input>
    inp4.setAttribute("type","text")//<input type="text" >
    inp4.setAttribute("value","")//<input type="text" value="" >
    inp4.setAttribute("name","dir")//<input type="text" value="" name="dir" >
    lab4.appendChild(inp4) //<label>Direccion:<input type="text" value="" name="dir" > </label>

    let salt4 = document.createElement("br") //</br>
    fiel.appendChild(salt4) // creamos un salto de línea
    
    //CAMPO DE TEXTO TELEFONO
    let lab5 = document.createElement("label")//<label></label>
    let texto7 = document.createTextNode("Teléfono: ") //Teléfono:
    lab5.appendChild(texto7) //<label>Teléfono:</label>
    fiel.appendChild(lab5) //meter el lab5 dentro del fieldset

    let inp5 = document.createElement("input") //<input>
    inp5.setAttribute("type","text")//<input type="text" >
    inp5.setAttribute("value","")//<input type="text" value="" >
    inp5.setAttribute("name","tlf")//<input type="text" value="" name="tlf" >
    lab5.appendChild(inp5) //<label>Direccion:<input type="text" value="" name="tlf" > </label>

    let salt5 = document.createElement("br") //</br>
    fiel.appendChild(salt5) // creamos un salto de línea
    let salt6 = document.createElement("br") //</br>
    fiel.appendChild(salt6) // creamos un salto de línea

    //CREACIÓN DEL SEGUNDO REQUERIMIENTO, PRIMEROS 4 RADIO BUTTON

    let lab6 = document.createElement("label")//<label></label>
    let texto8 = document.createTextNode("Indique, por favor, su intervalo de edad:") //Texto
    lab6.appendChild(texto8) //<label>Texto</label>
    fiel.appendChild(lab6) //meter el lab6 dentro del fieldset

    let salt7 = document.createElement("br") //</br>
    fiel.appendChild(salt7) // creamos un salto de línea  
     

    let lab7 = document.createElement("label")//<label></label>
    let texto9 = document.createTextNode("18-24 años") //Texto
    lab7.appendChild(texto9) //<label>Texto</label>
    fiel.appendChild(lab7) //meter el lab7 dentro del fieldset


    let inp6 = document.createElement("input") //<input>
    inp6.setAttribute("type","radio")//<input type="radio" >
    inp6.setAttribute("value","18-24")//<input type="radio" value="18-24" >
    inp6.setAttribute("name","edad")//<input type="radio" value="18-24" name="edad" >
    lab7.appendChild(inp6) //<label>Texto <input type="radio" value="18-24" name="edad" ></label>

    let salt8 = document.createElement("br") //</br>
    fiel.appendChild(salt8) // creamos un salto de línea  

    let lab8 = document.createElement("label")//<label></label>
    let texto10 = document.createTextNode("25-30 años") //Texto
    lab8.appendChild(texto10) //<label>Texto</label>
    fiel.appendChild(lab8) //meter el lab7 dentro del fieldset

    let inp7 = document.createElement("input") //<input>
    inp7.setAttribute("type","radio")//<input type="radio" >
    inp7.setAttribute("value","25-30")//<input type="radio" value="25-30" >
    inp7.setAttribute("name","edad")//<input type="radio" value="25-30" name="edad" >
    lab8.appendChild(inp7) //<label>Texto <input type="radio" value="25-30" name="edad" ></label>

    let salt9 = document.createElement("br") //</br>
    fiel.appendChild(salt9) // creamos un salto de línea 

    let lab9 = document.createElement("label")//<label></label>
    let texto11 = document.createTextNode("30-40 años") //Texto
    lab9.appendChild(texto11) //<label>Texto</label>
    fiel.appendChild(lab9) //meter el lab dentro del fieldset

    let inp8 = document.createElement("input") //<input>
    inp8.setAttribute("type","radio")//<input type="radio" >
    inp8.setAttribute("value","30-40")//<input type="radio" value="30-40" >
    inp8.setAttribute("name","edad")//<input type="radio" value="30-40" name="edad" >
    lab9.appendChild(inp8) //<label>Texto <input type="radio" value="30-40" name="edad" ></label>

    let salt10 = document.createElement("br") //</br>
    fiel.appendChild(salt10) // creamos un salto de línea 

    let lab10 = document.createElement("label")//<label></label>
    let texto12 = document.createTextNode("+40 años") //Texto
    lab10.appendChild(texto12) //<label>Texto</label>
    fiel.appendChild(lab10) //meter el lab dentro del fieldset

    let inp9 = document.createElement("input") //<input>
    inp9.setAttribute("type","radio")//<input type="radio" >
    inp9.setAttribute("value","+40")//<input type="radio" value="+40" >
    inp9.setAttribute("name","edad")//<input type="radio" value="+40" name="edad" >
    lab10.appendChild(inp9) //<label>Texto <input type="radio" value="+40" name="edad" ></label>

    let salt11 = document.createElement("br") //</br>
    fiel.appendChild(salt11) // creamos un salto de línea
    let salt12 = document.createElement("br") //</br>
    fiel.appendChild(salt12) // creamos un salto de línea

    //CREACIÓN DEL SEGUNDO REQUERIMIENTO, SEGUNDOS 4 RADIO BUTTON

    let lab11 = document.createElement("label")//<label></label>
    let texto13 = document.createTextNode("Indique, por favor, su nivel de estudios:") //Texto
    lab11.appendChild(texto13) //<label>Texto</label>
    fiel.appendChild(lab11) //meter el lab dentro del fieldset

    let salt13 = document.createElement("br") //</br>
    fiel.appendChild(salt13) // creamos un salto de línea


    let lab12 = document.createElement("label")//<label></label>
    let texto14 = document.createTextNode("E.S.O. ") //Texto
    lab12.appendChild(texto14) //<label>Texto</label>
    fiel.appendChild(lab12) //meter el lab dentro del fieldset


    let inp10 = document.createElement("input") //<input>
    inp10.setAttribute("type","radio")//<input type="radio" >
    inp10.setAttribute("value","ESO")//<input type="radio" value="ESO" >
    inp10.setAttribute("name","estudios")//<input type="radio" value="ESO" name="estudios" >
    lab12.appendChild(inp10) //<label>Texto <input type="radio" value="ESO" name="estudios" ></label>

    let salt14 = document.createElement("br") //</br>
    fiel.appendChild(salt14) // creamos un salto de línea  

    let lab13 = document.createElement("label")//<label></label>
    let texto15 = document.createTextNode("Bachillerato ") //Texto
    lab13.appendChild(texto15) //<label>Texto</label>
    fiel.appendChild(lab13) //meter el lab dentro del fieldset

    let inp11 = document.createElement("input") //<input>
    inp11.setAttribute("type","radio")//<input type="radio" >
    inp11.setAttribute("value","bachillerato")//<input type="radio" value="bachillerato" >
    inp11.setAttribute("name","estudios")//<input type="radio" value="bachillerato" name="estudios" >
    lab13.appendChild(inp11) //<label>Texto <input type="radio" value="bachillerato" name="estudios" ></label>

    let salt15 = document.createElement("br") //</br>
    fiel.appendChild(salt15) // creamos un salto de línea 

    let lab14 = document.createElement("label")//<label></label>
    let texto16 = document.createTextNode("CFGS ") //Texto 
    lab14.appendChild(texto16) //<label>Texto</label>
    fiel.appendChild(lab14) //meter el lab dentro del fieldset

    let inp12 = document.createElement("input") //<input>
    inp12.setAttribute("type","radio")//<input type="radio" >
    inp12.setAttribute("value","cfgs")// <input type="radio" value="cfgs" >
    inp12.setAttribute("name","estudios")// <input type="radio" value="cfgs" name="estudios" >
    lab14.appendChild(inp12) // <label>Texto <input type="radio" value="cfgs" name="estudios" ></label>

    let salt16 = document.createElement("br") //</br>
    fiel.appendChild(salt16) // creamos un salto de línea 

    let lab15 = document.createElement("label")//<label></label>
    let texto17 = document.createTextNode("Universidad ") //Texto
    lab15.appendChild(texto17) //<label>Texto</label>
    fiel.appendChild(lab15) //meter el lab dentro del fieldset

    let inp13 = document.createElement("input") //<input>
    inp13.setAttribute("type","radio")//<input type="radio" >
    inp13.setAttribute("value","uni")//<input type="radio" value="uni" >
    inp13.setAttribute("name","estudios")//<input type="radio" value="uni" name="estudios" >
    lab15.appendChild(inp13) //<label>Texto <input type="radio" value="uni" name="estudios" ></label>

    let salt17 = document.createElement("br") //</br>
    fiel.appendChild(salt17) // creamos un salto de línea
    let salt18 = document.createElement("br") //</br>
    fiel.appendChild(salt18) // creamos un salto de línea


    let lab16 = document.createElement("label")//<label></label>
    let texto18 = document.createTextNode("Indique, por favor, sus aficiones ") //Texto
    lab16.appendChild(texto18) //<label>Texto</label>
    fiel.appendChild(lab16) //meter el lab dentro del fieldset

    let salt19 = document.createElement("br") //</br>
    fiel.appendChild(salt19) // creamos un salto de línea

    //  CREAMOS LOS CHECKBOXS

    let lab17 = document.createElement("label")//<label></label>
    let texto19 = document.createTextNode("Leer ") //Texto
    lab17.appendChild(texto19) //<label>Texto</label>
    fiel.appendChild(lab17) //meter el lab dentro del fieldset

    let inp14 = document.createElement("input") //<input>
    inp14.setAttribute("type","checkbox")//<input type="checkbox" >
    inp14.setAttribute("value","leer")//<input type="checkbox" value="leer" >
    inp14.setAttribute("name","afi")//<input type="checkbox" value="leer" name="afi" >
    lab17.appendChild(inp14) //<label>Texto <input type="checkbox" value="leer" name="afi" ></label>

    let salt20 = document.createElement("br") //</br>
    fiel.appendChild(salt20) // creamos un salto de línea



    let lab18 = document.createElement("label")//<label></label>
    let texto20 = document.createTextNode("Hacer deporte ") //Texto
    lab18.appendChild(texto20) //<label>Texto</label>
    fiel.appendChild(lab18) //meter el lab dentro del fieldset

    let inp15 = document.createElement("input") //<input>
    inp15.setAttribute("type","checkbox")//<input type="checkbox" >
    inp15.setAttribute("value","deporte")//<input type="checkbox" value="deporte" >
    inp15.setAttribute("name","afi")//<input type="checkbox" value="deporte" name="afi" >
    lab18.appendChild(inp15) //<label>Texto <input type="checkbox" value="deporte" name="afi" ></label>

    let salt21 = document.createElement("br") //</br>
    fiel.appendChild(salt21) // creamos un salto de línea


    let lab19 = document.createElement("label")//<label></label>
    let texto21 = document.createTextNode("Salir de fiesta ") //Texto
    lab19.appendChild(texto21) //<label>Texto</label>
    fiel.appendChild(lab19) //meter el lab dentro del fieldset

    let inp16 = document.createElement("input") //<input>
    inp16.setAttribute("type","checkbox")//<input type="checkbox" >
    inp16.setAttribute("value","salir")//<input type="checkbox" value="salir" >
    inp16.setAttribute("name","afi")//<input type="checkbox" value="salir" name="afi" >
    lab19.appendChild(inp16) //<label>Texto <input type="checkbox" value="salir" name="afi" ></label>

    let salt22 = document.createElement("br") //</br>
    fiel.appendChild(salt22) // creamos un salto de línea


    let lab20 = document.createElement("label")//<label></label>
    let texto22 = document.createTextNode("Salir al cine ") //Texto
    lab20.appendChild(texto22) //<label>Texto</label>
    fiel.appendChild(lab20) //meter el lab dentro del fieldset

    let inp17 = document.createElement("input") //<input>
    inp17.setAttribute("type","checkbox")//<input type="checkbox" >
    inp17.setAttribute("value","cine")//<input type="checkbox" value="cine" >
    inp17.setAttribute("name","afi")//<input type="checkbox" value="cine" name="afi" >
    lab20.appendChild(inp17) //<label>Texto <input type="checkbox" value="cine" name="afi" ></label>

    let salt23 = document.createElement("br") //</br>
    fiel.appendChild(salt23) // creamos un salto de línea


    let lab21 = document.createElement("label")//<label></label>
    let texto23 = document.createTextNode("Viajar ") //Texto
    lab21.appendChild(texto23) //<label>Texto</label>
    fiel.appendChild(lab21) //meter el lab dentro del fieldset

    let inp18 = document.createElement("input") //<input>
    inp18.setAttribute("type","checkbox")//<input type="checkbox" >
    inp18.setAttribute("value","viajar")//<input type="checkbox" value="viajar" >
    inp18.setAttribute("name","afi")//<input type="checkbox" value="viajar" name="afi" >
    lab21.appendChild(inp18) //<label>Texto <input type="checkbox" value="viajar" name="afi" ></label>

    let salt24 = document.createElement("br") //</br>
    fiel.appendChild(salt24) // creamos un salto de línea
    let salt25 = document.createElement("br") //</br>
    fiel.appendChild(salt25) // creamos un salto de línea

    // AÑADIMOS LAS IMÁGENES

    let lab22 = document.createElement("label")//<label></label>
    let texto24 = document.createTextNode("")//sin texto
    lab22.appendChild(texto24) //metemos el texto vacio en el label
    fiel.appendChild(lab22)//metemos el lab en el fieldset

    let inp19 = document.createElement("input") //<input>
    inp19.setAttribute("type", "image")//<input type="image"> 
    inp19.setAttribute("src", "daw.png")//<input type="image" src="daw.png"> 
    inp19.setAttribute("alt", "daw")//<input type="image" src="daw.png alt="daw> 
    lab22.appendChild(inp19) //<label><input type="image" src="daw.png alt="daw> </label>

    let lab23 = document.createElement("label")//<label></label>
    let texto25 = document.createTextNode("")//sin texto
    lab23.appendChild(texto25) ///metemos el texto vacio en el label
    fiel.appendChild(lab23) //metemos el lab en el fieldset

    let inp20 = document.createElement("input")
    inp20.setAttribute("type", "image")//<input type="image"> 
    inp20.setAttribute("src", "edix.jpeg")//<input type="image" src="edix.jpeg"> 
    inp20.setAttribute("alt", "daw")//<input type="image" src="daw.png alt="daw"> 
    lab23.appendChild(inp20)//<label><input type="image" src="edix.jpeg" alt="daw"> </label>

    let salt26 = document.createElement("br") //</br>
    fiel.appendChild(salt26) // creamos un salto de línea
    let salt27 = document.createElement("br") //</br>
    fiel.appendChild(salt27) // creamos un salto de línea

    //AÑADIMOS EL TEXTAREA

    let lab24 = document.createElement("label")//<label></label>
    let texto26 = document.createTextNode("Observaciones: ")//Observaciones
    lab24.appendChild(texto26) //<label>Observaciones:  </label>
    fiel.appendChild(lab24) //metemos el lab en el fieldset 

    let txt = document.createElement("textarea") //<textarea></textarea> 
    txt.setAttribute("name", "texto")//<textarea name="texto"></textarea> 
    txt.setAttribute("cols","50")//<textarea name="texto" cols="50"></textarea> 
    txt.setAttribute("rows","6")//<textarea name="texto" cols="50" rows="6"></textarea> 
    lab24.appendChild(txt) //metemos el textarea en el label

    let salt28 = document.createElement("br") //</br>
    fiel.appendChild(salt28) // creamos un salto de línea
    let salt29 = document.createElement("br") //</br>
    fiel.appendChild(salt29) // creamos un salto de línea

    //CREAMOS EL CAMPO SELECT

    let lab25 = document.createElement("label")//<label></label>
    let texto27 = document.createTextNode("¿Cómo le gustaría pagar?")//Observaciones
    lab25.appendChild(texto27) //<label>pregunta  </label>
    fiel.appendChild(lab25) //metemos el lab en el fieldset 

    let sele = document.createElement("select") //<select></select>
    fiel.appendChild(sele) //metemos el select dentro del fieldset

    let op1 = document.createElement("option") //<option></option>
    op1.setAttribute("value", "contado") // <option value="contado"></option>
    let texto28 = document.createTextNode("Al contado") //al contado
    op1.appendChild(texto28) //<option value="contado">al contado </option> 
    sele.appendChild(op1) //<select><option value="contado">al contado </option> </select>

    let op2 = document.createElement("option") //<option></option>
    op2.setAttribute("value", "financiado") // <option value="financiado"></option>
    let texto29 = document.createTextNode("Financiación") //financiacion
    op2.appendChild(texto29) //<option value="financiado">Financiación</option> 
    sele.appendChild(op2) //<select><option value="contado">al contado </option> </select>

    let salt30 = document.createElement("br") //</br>
    fiel.appendChild(salt30) // creamos un salto de línea
    let salt31 = document.createElement("br") //</br>
    fiel.appendChild(salt31) // creamos un salto de línea


    //CREAMOS UN BOTON DE ENVIAR DOCUMENTACIÓN

    let inp25 = document.createElement("input")
    inp25.setAttribute("type", "button")
    inp25.setAttribute("onclick", "alert('¿Estás seguro que desea enviar el formulario?')")
    inp25.setAttribute("value", "Enviar Datos")
    fiel.appendChild(inp25)






















}

