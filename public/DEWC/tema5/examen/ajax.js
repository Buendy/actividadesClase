$(function(){


    getCategorias();


    $('input').eq(2).click(function (){
        $('#princiapales').removeClass('oculta');
        $('#princiapales').addClass('visible');
    });

    $('input').eq(1).click(function (){
        $('#princiapales').removeClass('visible');
        $('#princiapales').addClass('oculta');
    });

    $('<option value=0>-</option>').appendTo($('#princiapales'));




    $('#crear').click(function(evento){
        evento.preventDefault();
    var nombre = new RegExp('^[A-Z]*$');
    var errores = [];
    var mssgError = '';

    if(!nombre.test($('input').eq(0).val())){
        error = 'Nombre de la categoría incorrecto';
        errores.push(error);
    }else if($('input').eq(0).val() == null || $('input').eq(0).val() == '' ){
        error = 'Nombre de la categoría vacío';
        errores.push(error);
    }



    if(errores.length >= 1){

        for (var i = 0; i < errores.length ; i++){
            mssgError += '[ ' + errores[i] + ' ] ' + '\n';
        }
        alert(mssgError);
    }else{


        if($('input').eq(2).prop('checked') && $('#princiapales').val() == "0"){
            error = 'Revisar categoría';
            errores.push(error);
        }

        if(errores.length >= 1){

            for (var i = 0; i < errores.length ; i++){
                mssgError += '[ ' + errores[i] + ' ] ' + '\n';
            }
            alert(mssgError);
        }else{
            var PeticionPost = $.post('accion.php', $('form').serializeArray() );
            PeticionPost.done(function(data) {

                if(data=='x'){

                    if($('input').eq(2).prop('checked')){
                        $('<option value=\"'+$('#princiapales').length+'\">'+$('categoria').val()+'</option>').appendTo($('#princiapales'));
                    }
                    alert('Se ha añadido la categoría');
                }else {
                    alert(data);
                }
            });

        }

    }




});


    function getCategorias(){
      
        var peticionGet = $.get('accion.php');
        peticionGet.done(function( data ) {

            if(data!='y'){
                var i = 1;
                var categorias = JSON.parse(data);
                $.each(categorias, function( index, valor ) {
                    i = index + 1;
                    $('<option value=\"'+i+'\">'+valor["categoria"]+'</option>').appendTo($('#princiapales') );
                });
            }else{
                alert('no existen categorias');
            }
        });

    }



});