

$(function(){

var colores = ['rojo','verde','amarillo','azul','gris','blanco'];
var colours = ['red', 'green', 'yellow', 'blue', 'grey', 'white'];


for(var color of colores){
  var option = $('<option></option>').text(color);
  $('select').append(option);
};

$('select').change(function(){
  $('input').val($('select').val());
});

$('p').hover(function(){
  var colour = $('select').prop('selectedIndex');
  $('p').css("color", colours[colour]);
},
function(){
  $('p').css("color", "black");
});



});
