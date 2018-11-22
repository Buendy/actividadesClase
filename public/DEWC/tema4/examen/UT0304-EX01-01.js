function pulsaBoton(e){
  var boton = e.target.value;
  switch(boton){
    case 'boton01':
    document.getElementById('parrafo01').innerHTML ='Todo gran poder conlleva una gran responsabilidad.';
    break;
    case 'boton02':
      if(document.getElementById('parrafo02')){
        alert('El segundo párrafo ya existe');
      }else{
        var parrafo = document.createElement('p');
        var contenido = document.createTextNode("Nuestros antepasados lo llamaron magia, tú lo llamas ciencia. Vengo de una tierra en la que ambas son lo mismo");
        parrafo.appendChild(contenido);
        document.body.appendChild(parrafo);
        parrafo.id='parrafo02';
      }
    break;
    case 'boton03':
    document.getElementById('parrafo01').innerHTML = '';
    var parrafoborrado = document.getElementById('parrafo02');
    parrafoborrado.parentNode.removeChild(parrafoborrado);
    break;
  }
}
function asocia(){
  document.body.addEventListener('click',pulsaBoton);
}
document.addEventListener('DOMContentLoaded',asocia);
