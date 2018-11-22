

//OBTENER ARRAY CON TODOS LOS ELEMTENTOS QUE TENGAN ESA ETIQUETA
var parrafos = document.getElementsByTagName("p");
var primerParrafo = parrafos[0];

//OBTENER ELEMENTO CUYO ATRIBUTO NAME SEA EL INDICADO
// (OBTIENE ARRAY SI HAY VARIOS CON MISMO NOMBRE)
var parrafoEspecial = document.getElementsByName("especial");
/* <p name="prueba">...</p>
<p name="especial">...</p>
<p>...</p>*/

//OBTIENE ELEMENTOS CUYO ATRIBUTO ID SEA EL INDICADO
var cabecera = document.getElementById("cabecera");
<div id="cabecera">
<a href="/" id="logo">...</a>
</div>

//SE PUEDEN CREAR NODOS-----------------------
// Crear nodo de tipo Element
var parrafo = document.createElement("p");
// Crear nodo de tipo Text
var contenido = document.createTextNode("Hola Mundo!");
// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);
// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(parrafo);
//----------------------------------------------

//ELIMINACION DE NODOS
var parrafo = document.getElementById("provisional");
parrafo.parentNode.removeChild(parrafo);
//<p id="provisional">...</p>

//ACCEDER DIRECTAMENTE A ATRIBUTOS
var imagen = document.getElementById("imagen");
alert(imagen.style.margin);
//<img id="imagen" style="margin:0; border:0;" src="logo.png" />

var parrafo = document.getElementById("parrafo");
alert(parrafo.style.fontWeight); // muestra "bold"
//<p id="parrafo" style="font-weight: bold;">...</p>

var parrafo = document.getElementById("parrafo");
alert(parrafo.class); // muestra "undefined"
alert(parrafo.className); // muestra "normal"
//<p id="parrafo" class="normal">...</p>

//OBJETO WINDOW Y SUS PROPIEDADES
window.document.bgColor       window.frames[0]
window.closed                 window.console
window.defaultStatus          window.document
window.frameElement           window.history
window.innerHeight            window.innerWidth
window.lengt                  window.localStorage
window.location               window.name
window.navigator              window.opener
window.outerHeight            window.outerWidth
window.pageXOffset            window.pageYOffset
window.parent                 window.screen
window.screenLeft             window.screenTop
window.screenX                window.sessionStorage
window.scrollX                window.scrollY
window.self                   window.status
window.top

//METODOS DE WINDOW
alert()            confirm()
prompt()           blur()
focus()            setInterval()
clearInterval()    setTimeOut()
clearTimeout()     back()
forward()          home()
stop()             print()
scrollBy()         scrollTo()
open()             close()
moveTo()           moveBy()
resizeTo()         resizeBy()

//PROPIEDADES Y METODOS DE DOCUMENT
document.activeElement        document.addEventListener()
document.anchors              document.applets
document.baseURI              document.body
document.close()              document.characterSet
document.createAttribute()    document.createComment()
document.createEvent()        document.createTextNode()
document.defaultView          document.designMode
document.doctype              document.documentMode
document.documentURI          document.domain
document.embeds               document.forms
document.getElementById()     document.getElementsByClassName()
document.getElementsByName()  document.getElementsByTagName()
document.hasFocus()           document.head
document.images               document.importNode()
document.imputEncoding        document.lastModified
document.link                 document.href
document.normalize()          document.normalizeDocument()
document.open()               document.readyState
document.referrer             document.removeEventListener(type, listener, this, ev, options)
document.renameNode()         document.scripts
document.strictErrorChecking  document.title
document.URL                   document.write(content)
document.writeln()

//FLUJO DE ESCRITURA
document.writeln('<p>escribiendo tras la carga</p>')


function escribirPostCarga(){
  document.open();
  document.write('<p>escribiendo tras la carga tras emplear open()</p>');
  document.close();
}

//EVENTOS
  //EN DOM LEVEL 1
  onkeydown
  onkeypress
  onkeyup
  //EN DOM LEVEL 2
  kypress
  keydown
  keyup

  document.addEventListener('DOMContentLoaded',capturaEventoClick(boton));
  var boton = document.getElementById('boton');

  function capturaEventoClick(elemento){
      elemento.addEventListener('click', holaMundo, false);
  }
//--------------------------------------

  function holaMundo(){
    var evento =  event;
    alert(evento.timeStamp);
  }
  var boton = document.getElementById('boton');
  boton.addEventListener('click', holaMundo, false);


//ACCESO A LOS FORMULARIOS

//PROPIEDADES DE FORMULARIOS
var formularioPrincipal = document.formulario;
var primerElemento = document.formulario.elemento;
// <form name="formulario">
// <input type="text" name="elemento" />
// </form>
//ACCESO AL CONTENIDO
document.formulario.elemento.value='Hola'
//ACESO A TEXTAREA
//<input type="text" id="texto" />
var valor = document.getElementById("texto").value;
// <textarea id="parrafo"></textarea>
var valor = document.getElementById("parrafo").value;

// <input type="radio" value="si" name="pregunta" id="pregunta_si"/> SI
// <input type="radio" value="no" name="pregunta" id="pregunta_no"/> NO
// <input type="radio" value="nsnc" name="pregunta" id="pregunta_nsnc"/>
var elementos = document.getElementsByName("pregunta");
for(var i=0; i<elementos.length; i++) {
  alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
}


// <input type="checkbox" value="condiciones" name="condiciones" id="condiciones"/> He leído y acepto las condiciones
// <input type="checkbox" value="privacidad" name="privacidad" id="privacidad"/> He leído la política de privacidad
var elemento = document.getElementById("condiciones");
alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
elemento = document.getElementById("privacidad");
alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);


// <select id="opciones" name="opciones">
// <option value="1">Primer valor</option>
// <option value="2">Segundo valor</option>
// <option value="3">Tercer valor</option>
// <option value="4">Cuarto valor</option>
// </select>
var lista = document.getElementById("opciones");
var indiceSeleccionado = lista.selectedIndex;
var opcionSeleccionada = lista.options[indiceSeleccionado];
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;


//VALIDAR UN CAMPO DE TEXTO OBLIGATORIO
// <form  action="#" name="formulario">
// <input type="text"  name="campo">
// <input type="button" name="boton" value="Enviar" >
// </form>
function enviarFormulario(){
var valor = document.formulario.campo.value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    alert('campo de texto vacio');
  }else{
    event.currentTarget.form.submit();
  }
  }
function asociarEventos(){
  document.formulario.boton.addEventListener('click',enviarFormulario);
}
document.addEventListener('DOMContentLoaded',asociarEventos);


//VALIDAR CAMPOS NUMERICOS
function enviarFormulario(){
  var valor = document.formulario.campo.value;
  if( isNaN(valor) ) {
    alert('introduzca un campo numérico');
  }else{
    event.currentTarget.form.submit();
  }
}


//VALIDAR OPCION DE UNA LISTA
function enviarFormulario(){
  indice = document.getElementById("opciones").selectedIndex;
  if( indice == null || indice == 0 ) {
    alert('seleccione un campo de la lista');
  }else{
    event.currentTarget.form.submit();
  }
}
// <select id="opciones" name="opciones">
// <option value="">- Selecciona un valor -</option>
// <option value="1">Primer valor</option>
// <option value="2">Segundo valor</option>
// <option value="3">Tercer valor</option>
// </select>
