//Indicamos que carge la función "inicio" al cargar el HTML
window.addEventListener("load", inicio, false);

//Esta funcion se ejecuta una vez cargado el HTML
function inicio(){
arrayMeses(); // Llamamos a la función "arrayMeses"
}

//La función crea un array con los 12 meses y los mostramos en pantalla con alert. Se utiliza un bucle para recorrer el array
function arrayMeses(){
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var numero =0;

  for (var i = 0; i < meses.length; i++) {
    alert(meses[i]);
  }
}
