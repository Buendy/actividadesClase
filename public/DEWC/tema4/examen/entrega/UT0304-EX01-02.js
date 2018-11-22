

window.addEventListener("load", inicio, false);


var provincias = ['-','La Coruña','Álava','Albacete','Alicante','Badajoz','Baleares','Cáceres','Cádiz','Cantabria','Castellón de la Plana','Girona','Granada','Huelva','Jaén','La Rioja','Las Palmas','León','Madrid','Málaga','Navarra','Ourense','Palencia','Salamanca','Sta. Cruz de Tenerife','Segovia','Tarragona','Teruel','Valencia','Valladolid','Zamora','Almería','Asturias','Ávila','Barcelona','Burgos','Ceuta','Ciudad Real','Córdoba','Cuenca','Guadalajara','Guipúzcoa','Huesca','Lleida','Lugo','Melilla','Murcia','Pontevedra','Sevilla','Soria','Toledo','Vizcaya','Zaragoza']
var prefijos = ['981','945','967','96','924','971','927','956','942','964','972','958','959','953','941','928','987','91','95','948','988','979','923','922','921','977','978','96','983','980','950','98','920','93','947','956','926','957','969','949','943','974','973','982','95','968','986','95','975','925','94','976']

function inicio(){
  document.formulario.addEventListener('submit',enviarFormulario);
  var opciones = document.getElementById('provincia');
  opciones.length = provincias.length;
  for(var i=0; i < provincias.length;i ++){
    opciones.options[i].text = provincias[i];
    opciones.options[i].value=i;
  }
  opciones.addEventListener('change',indicaPrefijo,false);
}

function indicaPrefijo(e){
  var seleccion = e.currentTarget.value;
  document.formulario.numtelefono.value=prefijos[seleccion];
}

function enviarFormulario(e){
  var opciones = document.getElementById('provincia');
  var nombre = document.formulario.nombre.value;
  var apellidos = document.formulario.apellidos.value;
  var numero = document.formulario.numtelefono.value;
  if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
    alert('campo de nombre vacío');
    e.preventDefault();
  }else if(/\d/.test(nombre)){
    alert('El nombre no puede tener números');
    e.preventDefault();
  }else if(!/^[A-ZÑÁÉÍÓÚ]{1}[a-zñáéíóú]*$/.test(nombre)){
    alert('El nombre no es correcto, debe de empezar con una mayuscula y no puede ser compuesto');
    e.preventDefault();
  }

  if( apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos)) {
    alert('campo de apellidos vacío');
    e.preventDefault();
  }else if(/\d/.test(apellidos)){
    alert('Los apellidos no pueden tener números');
    e.preventDefault();
  }else if(!/[A-ZÑ][a-záéíóúñAÉÍÓÚ]/.test(apellidos)){
    alert('El apellido no es correcto');
    e.preventDefault();
  }


  if( numero == null || numero.length == 0 || /^\s+$/.test(numero)){
    alert('campo teléfono vacío');
    e.preventDefault();
  }else if(numero.length < 9 || numero.length > 9 ){
    alert('El teléfono no es correcto');
    e.preventDefault();
  }else if(!/^[8|9|6|7][\d]{8}$/.test(numero)){

  }

  if(opciones.value == 0){
    alert('No has seleccionado una provincia');
    e.preventDefault();
  }


}
