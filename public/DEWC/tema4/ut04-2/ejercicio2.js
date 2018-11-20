
window.addEventListener("load", inicio, false);

var pueblos = ["Abanilla", "Abarán","Aguilas","Albudeite","Alcantarilla","Aledo","Alguazas","Alhama de Murcia","Archena","Beniel","Blanca","Bullas",
"Calasparra","Campos del Río","Caravaca de la Cruz","Cartagena","Cehegín","Ceutí","Cieza","Fortuna","Fuente Alamo","Jumilla","La Unión",
"Las Torres de Cotillas","Librilla","Lorca","Lorquí","Los Alcázares","Mazarrón","Molina de Segura","Moratalla","Mula","Murcia","Ojós",
"Pliego","Puerto Lumbreras","Ricote","San Javier","San Pedro del Pinatar","Santomera","Torre Pacheco","Totana","Ulea","Villanueva del Segura",
"Yecla"];

function inicio(){
  document.getElementById('si').addEventListener('click', mostrar, false);
  document.getElementById('no').addEventListener('click', ocultar, false);
  document.formulario.addEventListener('submit',enviarFormulario);
}

function mostrar(){
  var cuadro = document.getElementById("especifique");
  var opciones = document.getElementById('selec');
  opciones.length = pueblos.length;
  cuadro.style.visibility = "visible";
  for(var i=0; i < pueblos.length;i ++){
    opciones.options[i].text = pueblos[i];
  }

}

function ocultar(){
  var cuadro = document.getElementById("especifique");
  cuadro.style.visibility = "hidden";
}

function enviarFormulario(e){
  var apellidos = document.formulario.apellidos.value;
  var nombre = document.formulario.nombre.value;
  if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
    alert('campo de nombre vacío');
    e.preventDefault();
  }else if(nombre.length > 25){
    alert('campo de nombre demasiado largo');
    e.preventDefault();
  }else if(/\d/.test(nombre)){
    alert('El nombre no puede tener números');
    e.preventDefault();
  }else if(!/^[A-Z][a-z]+( [A-Z][a-z]+)?$/.test(nombre)){
    alert('El nombre no es correcto, debe de empezar con una mayuscula');
    e.preventDefault();
  }

  if( apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos)) {
    alert('campo de apellidos vacío');
    e.preventDefault();
  }else if(apellidos.length > 50){
    alert('campo de apellidos demasiado largo');
    e.preventDefault();
  }else if(/\d/.test(apellidos)){
    alert('Los apellidos no pueden tener números');
    e.preventDefault();
  }else if(!/^[A-Z][a-z]+(-[A-Z][a-z]+)?$/.test(apellidos)){
    alert('El apellido no es correcto');
    e.preventDefault();
  }


}
