//Indicamos que carge la función "inicio" al cargar el HTML
window.addEventListener("load", inicio, false);
//Esta funcion se ejecuta una vez cargado el HTML
function inicio(){
//Nos traemos un elemento del HTML a partir de una ID y le Indicamos
// que cuando se haga click ejecute la función mensaje
document.getElementById("button").addEventListener("click", tablas, false);

}


function tablas(){

  var numero = 10;
  var resultados = [];
  var aux = 0;
  var mensaje ='';

  for (var i = 0; i <= 10; i++) {
    resultados[i] = [];
  }

for (var i = 1; i <= 10; i++) {
    for (var j= 1; j <= 10; j++) {
          aux = i * j;
          resultados[i][j] = aux;
}

}

for (var i = 1; i <= 10; i++) {
    for (var j= 1; j <= 10; j++) {
      mensaje += i + 'x' + j + '=' + resultados[i][j] + '\n';
}
  alert(mensaje);
  mensaje='';
}



/*for (var j = 1; j < 10; j++){
for (var i = 1; i < 10; i++) {
  alert('tabla del ' + j + "\n" + resultados[contador] + "\n");
  contador++;

}
}*/
}
