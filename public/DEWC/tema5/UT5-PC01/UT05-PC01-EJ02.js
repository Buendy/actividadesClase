var pueblos = ["Seleccione un municipio", "Abanilla", "Abarán","Aguilas","Albudeite","Alcantarilla","Aledo","Alguazas","Alhama de Murcia","Archena","Beniel","Blanca","Bullas",
    "Calasparra","Campos del Río","Caravaca de la Cruz","Cartagena","Cehegín","Ceutí","Cieza","Fortuna","Fuente Alamo","Jumilla","La Unión",
    "Las Torres de Cotillas","Librilla","Lorca","Lorquí","Los Alcázares","Mazarrón","Molina de Segura","Moratalla","Mula","Murcia","Ojós",
    "Pliego","Puerto Lumbreras","Ricote","San Javier","San Pedro del Pinatar","Santomera","Torre Pacheco","Totana","Ulea","Villanueva del Segura",
    "Yecla"];



$(function(){



    var municipio;
    var tipos = $('#poblaciones');
    for(i in pueblos){
        var option = $('<option>'+pueblos[i]+'</option>');
        option.val(pueblos[i]);

        tipos.append(option);
    }

    
    $('#murciano').change(function(){

        if($(this).prop('checked')){
            $('#poblaciones').attr('class','visible');
        }else{
            $('#poblaciones').attr('class','oculta');
        }
    });

    $('input').eq(3).change(function(){
        municipio = $('#poblaciones').val();
    });

    $('#post').click(function(even){
        var nombre = new RegExp('^[A-Z][a-z]*$');
        var apellidos = new RegExp('^([A-Z][a-z]+) ([A-Z][a-z]+)$');
        var dni = new RegExp('^([0-9]{8})([A-Z]{1})$');
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X','B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        var errores = [];
        var mssgError = '';


        if(!nombre.test($('input').eq(0).val())){

            error = 'Nombre incorrecto';
            errores.push(error);
        }
        if(!apellidos.test($('input').eq(1).val())){

            error = 'Apellidos incorrectos';
            errores.push(error);
        }
        if(!dni.test($('input').eq(2).val())){
            error = 'Formato del dni incorrecto';
            errores.push(error);
        }else{
            var letra = $('input').eq(2).val().substring(8);
            var numero = $('input').eq(2).val().substring(0,8);

            var restoDNI = numero % 23;
            var LetraCalculada = letras[restoDNI];
            if (letra != LetraCalculada) {
                error = 'El DNI no es correcto';
                errores.push(error);
            }
        }

        if($('input').eq(3).prop('checked')){

            if($('#poblaciones').val() != pueblos[$('#poblaciones').prop('selectedIndex')]){
                error = 'No has selecionado un municipio correcto';
                errores.push(error);
            }else if($('#poblaciones').val() == pueblos[0]){
                error = 'No has selecionado un municipio correcto';
                errores.push(error);
            }
        }

        if(errores.length >= 1){

            for (var i = 0; i < errores.length ; i++){
                mssgError += '[ ' + errores[i] + ' ] ' + '\n';
            }
            alert(mssgError);
        }else{

		  
			even.preventDefault();
				
				$.ajax({
                    type: 'post',
                    url: "post.php",
                    data: {
                        nombre : $('#nombre').val(),
                        apellidos : $('#apellidos').val(),
                        dni : $('#dni').val(),
                        murciano : $('#murciano').prop('checked'),
                        poblacion : ($('#murciano').prop(('checked'))) ? $('#poblaciones').val() : 'No hay poblacion seleccionada',
                        sexo : ($('input[type=radio]').eq(0).prop('checked')) ? $('input[type=radio]').eq(0).val() : $('input[type=radio]').eq(1).val(),
                    },
                    success : function(data) {
                        alert(data);
                    },
                    error : function(xhr, status) {
                        alert('Disculpe, existió un problema');
                    },
                    complete : function(xhr, status) {
                        alert('Petición realizada');
                    }
                });

        }
    });



    $('#get').click(function(even){
        var dni = new RegExp('^([0-9]{8})([A-Z]{1})$');

        
         if(!dni.test($('input').eq(2).val())){
            alert('Formato del dni incorrecto');
            
        }else{
            var err = false;
        even.preventDefault();
            $.ajax({
                type: 'get',
                url: "get.php",
                data: {dni : $('#dni').val(),
                },
                success : function(data) {
                    alert(data);
                },
                error : function(xhr, status) {
                    alert('Disculpe, existió un problema');
                    var err = true;
                },
                complete : function(xhr, status) {

                    if(err == true){
                        alert('Petición realizada con errores');
                    }else{
                        alert('Petición realizada');
                    }

                }
            });

        }

    

        

    });





})
