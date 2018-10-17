
//Indicamos que carge la función "inicio" al cargar el HTML
window.addEventListener("load", inicio, false);
//Esta funcion se ejecuta una vez cargado el HTML
function inicio(){

  var botones = ['button1', 'button2', 'button3'];
  var funciones = [hora, fecha, dia];
  for(i in botones){
    document.getElementById(botones[i]).addEventListener('click',funciones[i]);
  }

//Nos traemos los elementos del HTML a partir de una ID y le Indicamos
// que cuando se haga click ejecute una función
/*document.getElementById("button1").addEventListener("click", hora, false);
document.getElementById("button2").addEventListener("click", fecha, false)
document.getElementById("button3").addEventListener("click", dia, false)
*/


}


function hora(){
        var hour = new Date();
  alert(hour.getHours() + ":" + hour.getMinutes() + ":" + hour.getSeconds());

}

function fecha(){
  var fecha= new Date();
  alert(fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear());
}
 function dia(){
  var dia = new Date();
  alert(dia.getDay());

}

 
