var formulario,nombre,apellidos,almacenar,consultar;

$(function(){

	nombre = $('#nombre');
	apellidos = $('#apellidos');
	almacenar = $('#post');
	consultar = $('#get');
	formulario = $('form');

	almacenar.click(
		function(event){
				event.preventDefault();
				console.log( formulario.serializeArray());
				var posting = $.post( 'accion.php', formulario.serializeArray() );
				posting.done(function( data ) {
					alert(data);
				});
	});

	consultar.click(
		function(event){
			event.preventDefault();
			var posting = $.get( 'accion.php', nombre.serializeArray(),'json');
				posting.done(function( data ) {
					var items = [];
					$.each(JSON.parse( data), function( key, val ) {
						$("#"+key).val(val)
					});
				});
	});

})
