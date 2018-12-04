$(function(){


    $('#bt1').click(function(){
       if($('input').val() == ''){
           alert("Introduce un texto en el cuadro de texto");
       } else {
           var contenido = $('input').val();

           var array1 = contenido.split(' ');
           var array2 = contenido.split(' ');
           $('#p1').data('p1', array1);
           $('#p2').data('p2', array2);
       }

    });

    $('#bt2').click(function(){
        var contenido = $('#p1').data('p1').shift();
        $('#p1').text(contenido);
        $('#p2').text(contenido);
    });

    $('#bt3').click(function(){
        var contenido =  $('#p2').data('p2').shift();
        $('#p1').text(contenido);
        $('#p2').text(contenido);
    });


});
