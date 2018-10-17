//Evento a la escucha que cuando carga la página ejecuta la función inicio
window.addEventListener("load", inicio, false);

//Función llamada a través del evento
function inicio() {
//Añadimos un evento al botón, que hará que se ejecute la función "calcularLetra"
  document.getElementById("button").addEventListener("click", calcularLetra, false);
}

//Esta función comprobará si la letra introducida es la correcta para el DNI introducido
function calcularLetra() {
//Array con las letras para el DNI
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
    'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Pedimos el número del DNI a través de un ventana
  var numero = prompt("Indica el número de tu DNI:");
// Pedimos la letra del DNI a través de una ventana
  var letra = prompt("Indica la letra de tu DNI:");


  if (numero > 99999999 || numero < 0) { //Comprobamos que el numero introducido está entre esos dos rangos
    alert("El numero proporcionado no es válido");
  } else { //Si no está dentro del rango ejecutamos lo siguiente
    var restoDNI = numero % 23; //Sacamos el resto del número para buscar en el array
    var LetraCalculada = letras[restoDNI]; //Buscamos en el array con el resto obtenido
    if (letra == LetraCalculada) { //Se comprueba si la letra que hemos buscado coincide con la letra introducida
      alert("La letra introducida es correcta");
    } else {                                          //SE NOS MUESTRA UN MENSAJE SEGUN LA CONDICION QUE SE CUMPLA
      alert("La letra introducida es incorrecta");
    }
  }
}
