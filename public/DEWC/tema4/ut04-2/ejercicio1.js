
window.addEventListener("load", inicio, false);

function inicio(){
  var botones = document.getElementsByTagName('input');

  for (var i=0; i < botones.length; i++){
    botones[i].addEventListener('click', insertar, false);
  }

function insertar(evento){
  var texto = document.getElementById('texto');
  console.log(evento.target.value);





  switch(evento.target.value){
    case '<':
    console.log(texto.value);
    texto.value -= texto.value.substr( 0, texto.value.length, -1);
    break;
    case 'C':
    texto.value = '';
    break;
    case '9':
    texto.value += evento.target.value;
    break;
    case '8':
    texto.value += evento.target.value;
    break;
    case '7':
    texto.value += evento.target.value;
    break;
    case '6':
    texto.value += evento.target.value;
    break;
    case '5':
    texto.value += evento.target.value;
    break;
    case '4':
    texto.value += evento.target.value;
    break;
    case '3':
    texto.value += evento.target.value;
    break;
    case '2':
    texto.value += evento.target.value;
    break;
    case '1':
    texto.value += evento.target.value;
    break;
    case '0':
    texto.value += evento.target.value;
    break;
    case '+':
    texto.value += "    + \n";
    break;
    case 'x':
    texto.value += "    x \n";
    break;
    case '-':
    texto.value += "    - \n";
    break;
    case '/':
    texto.value += "    : \n";
    break;



  }
}

};
