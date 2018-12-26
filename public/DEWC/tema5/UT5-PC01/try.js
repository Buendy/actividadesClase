$(function(){

    var principales = $('#principales');
    var categoria = $('#categoria');
    var tipo = $('#tipo');
    var principal = $('input:radio[value=principal]');
    var secundaria = $('input:radio[value=secundaria]');

    crear = $('#crear');
    formulario = $('form');
// Inicializa la select de categorias principales mediante una request
// de la que obtendrá un array json con las categorías principales

    $('<option value=0>-</option>').appendTo( principales );
    var getting = $.get( 'accion.php');
    getting.done(function( data ) {
// Si la request retorna y significa que el fichero no existe.
        if(data!='y'){
            var i = 1;
            var arrayValores = JSON.parse(data);
            $.each(arrayValores, function( index, valor ) {
                i = index + 1;
                $('<option value=\"'+i+'\">'+valor["categoria"]+'</option>').appendTo( principales );
            });
        }else{
            alert('no existen categorias');
        }
    });

// Al pulstar el radiobutton secundaria se debe mostrar la select principales
    secundaria.click(function (){
        principales.removeClass('oculta');
        principales.addClass('visible');
    });
// Al pulstar el radiobutton principal se debe consultar la select principales
    principal.click(function (){
        principales.removeClass('visible');
        principales.addClass('oculta');
    });

// Al pulstar el submit crear se validarán los campos del formulario y se
// mandará mediante una request post serializado el formulario para para
// almacenar

    crear.click(function(event){
// Se anula el submit
        event.preventDefault();

        var valido = true;
        var texto="Revise el formato de ";

//Se procede a la validación de
        if(!/^[A-Z]+$/.test(categoria.val())){
            valido = false;
            texto=texto+"\n nombre categoria."
        }

        if(secundaria.prop('checked') && principales.val() == "0"){
            valido = false;
            texto=texto+"\n categoria principal."
        }

        if(!valido){
            alert(texto)
        }else{
// Se envia el formulario serializado para que el action.php lo almacene
// si no exite ya.
            var posting = $.post( 'accion.php', formulario.serializeArray() );
            posting.done(function( data ) {
// Si se devuelve x se ha añadido la categoria con exito
                if(data=='x'){
// Se añade la nueva categoria a la select
                    if(principal.prop('checked')){
                        $('<option value=\"'+principales.length+'\">'+categoria.val()+'</option>').appendTo( principales );
                    }
                    alert('Categoria añadida.');
                }else {
// Se lanza el mensaje procedente del php, en este caso será
// que no se ha podido añadir porque ya existia una categoria con
// ese nombre.
                    alert(data);
                }
            });
        }
    });
})