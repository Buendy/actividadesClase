window.addEventListener("load", inicio, false);

function inicio(){
document.getElementById("button").addEventListener("click", arrayValores, false);

}

function arrayValores(){
//Creamos el array con los valores indicados
var valores = [true, 5, false, "hola", "adios", 2];

if (valores[3] > valores[4]){
  alert(valores[3] + " es mayor que " + valores[4]);
} else {
  alert(valores[4] + " es mayor que " + valores[3]);
}

alert(valores[0] || valores[2]);
alert(valores[0] && valores[2]);

alert(valores[1] + valores[5]);
alert(valores[1] - valores[5]);
alert(valores[1] * valores[5]);
alert(valores[1] / valores[5]);


}
