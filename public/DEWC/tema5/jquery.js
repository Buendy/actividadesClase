$(function(){
    $("#boton").click(avisa);
});

function avisa()
{
    var nombre = $("#boton").val();
    alert("Pulsado botón:" + nombre);
}