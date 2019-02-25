
$(function(){

    var tipoIva = ['General','Reducido','Superreducido'];
    var iva = [0.21,0.1,0.04];
    var regex = new RegExp('^(([0-9]*)(\\.([0-9]+))?)$');

        var tipos = $('select');
        for(i in tipoIva){
            var option = $('<option>'+tipoIva[i]+'</option>');
            option.val(i);
            tipos.append(option);
        }

        $('input').eq(0).val(iva[$('select').prop('selectedIndex')]);
        $('select').change(function(){
            $('input').eq(0).val(iva[$('select').prop('selectedIndex')]);
            valida();
        });

       $('input').eq(1).blur(valida);

      function valida(){
          if($('input').eq(1).val() == '' | $('input').eq(1).val() == null){
              alert('No has introducido ningún número');
              $('input').eq(1).val(0);
          }else if(!regex.test($('input').eq(1).val())){
              alert('introduce un número correcto');
              $('input').eq(1).val(0);
          }else{
              IVA = $('input').eq(1).val() / 100;
              IVA = IVA * $('input').eq(0).val();
              total = IVA + parseFloat($('input').eq(1).val());
              $('input').eq(2).val(total);
          }

      }






    });

