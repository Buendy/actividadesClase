window.addEventListener("load", inicio, false);

function inicio(){
var M = prompt("Introduce un número: ");
var n = prompt("Introduce otro número: ");

alert('El factorial de ' + M + ' es ' + factorial(M));
alert('El factorial de ' + n + ' es ' + factorial(n));


var solucion = factorial(n) / (factorial(n-M) * factorial(M));
alert('El número combinatorio de ' + M + ' sobre ' + n + ' es ' + solucion);



}


function factorial(num){
  var resultado = 1;
  for (var i=1; i <= num; i++){
    resultado = resultado * i;
      }
    return resultado;
}
