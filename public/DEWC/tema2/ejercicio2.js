

//Indicamos que carge la función "inicio" al cargar el HTML
window.addEventListener("load", inicio, false);
//Esta funcion se ejecuta una vez cargado el HTML
function inicio(){
alerta(); //Llamamos a la funcion "alerta()"

//Nos traemos un elemento del HTML a partir de una ID y le Indicamos
// que cuando se haga click ejecute la función mensaje
document.getElementById("button1").addEventListener("click", mensaje, false);
}

//EJERCICIO 1 -----------------------------------------------------------------------------------------------------------
//Esta función muestra una ventana con un mensaje
function mensaje(){
  alert ("Este es un mensaje a partir de un botón");
}

//Esta función muestra una ventana con un mensaje
function alerta(){
var mensaje1 = "Hola Mundo!!\n\"Qué sencillo es incluir comilla simples ' y comillas dobles \" en un texto empleando javascript\"";
alert(mensaje1);
}
