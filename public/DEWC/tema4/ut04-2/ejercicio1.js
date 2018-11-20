
window.addEventListener("load", inicio, false);

function inicio(){
  var botones = document.getElementsByTagName('input');
  var array = [];
  var operacion = '';
  var mem = [];

  for (var i=0; i < botones.length; i++){
    botones[i].addEventListener('click', insertar, false);
  }


  function resultado(){
      var num = 0;
    for(var i=0; i < array.length;i++){
      array[i] = parseInt(array[i]);
    }

    if(operacion == '+'){
      num = array[0] + array[1];
      return num;
    }else if(operacion == 'x'){
      num = array[0] * array[1];
      return num;
    }else if(operacion == '-'){
      num = array[0] - array[1];
      return num;
    }else if(operacion == '/'){
      num = array[0] / array[1];
      return num;
    }
  }

function insertar(evento){
  var texto = document.getElementById('texto');
  console.log(evento.target.value);


  switch(evento.target.value){
    case '<':
    console.log(texto.value);
    texto.value = texto.value.substring(0, (texto.value.length -1));
    break;
    case 'C':
    texto.value = '';
    array = [];
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
    array.push(texto.value);
    operacion = '+';
    texto.value = '';
    break;
    case 'x':
    array.push(texto.value);
    operacion = 'x';
    texto.value = '';
    break;
    case '-':
    array.push(texto.value);
    operacion = '-';
    texto.value = '';
    break;
    case '/':
    array.push(texto.value);
    operacion = '/';
    texto.value = '';
    break;
    case "=":
    array.push(texto.value);
    texto.value = '';
    texto.value = resultado();
    array = [];
    break;
    case "<--'":
    mem[0] = texto.value;
    break;
    case "recuperar":
    texto.value = mem[0];
    break;





  }
}

};
