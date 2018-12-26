<?php
$users = null;
if(file_exists('usuarios.json')){
$data = file_get_contents("usuarios.json");
$users = json_decode($data, true);
}



$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$dni = $_POST['dni'];
$murciano = $_POST['murciano'];
$poblacion = $_POST['poblacion'];
$sexo = $_POST['sexo'];

if($users == null){
	$datos[] = array('nombre'=>$nombre,'apellidos'=>$apellidos,'dni'=>$dni,'murciano'=>$murciano,'poblacion'=>$poblacion,'sexo'=>$sexo);
	$fp = fopen('usuarios.json', 'w');
	fwrite($fp, json_encode($datos). "\n");
	fclose($fp);

}else{
	$datos = array('nombre'=>$nombre,'apellidos'=>$apellidos,'dni'=>$dni,'murciano'=>$murciano,'poblacion'=>$poblacion,'sexo'=>$sexo);
	array_push($users, $datos);


	$fp = fopen('usuarios.json', 'w');
	fwrite($fp, json_encode($users). "\n");
	fclose($fp);

}



echo "Usuario almacenado"?>