<?php
$data = file_get_contents("usuarios.json");
$users = json_decode($data, true);
$mssg = null;


foreach ($users as $user => $value) {
	if($_GET['dni'] == $value['dni']){
		$mssg = 'Los datos son los siguientes:' . "\n";
		$mssg .= ' Nombre: ' . $value['nombre'] . "\n";
		$mssg .= ' Apellidos: ' . $value['apellidos'] . "\n";
		$mssg .= ' DNI: ' . $value['dni'] . "\n";
		$mssg .= ' Murciano: ' . $value['murciano'] . "\n";
		$mssg .= ' Población: ' . $value['poblacion'] . "\n";
		$mssg .= ' Sexo: ' . $value['sexo'] . "\n";
	}
}

if($mssg == null){
	echo 'No existe el usuario';
}else{
	echo $mssg;
}


?>