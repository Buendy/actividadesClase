<?php
$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));

switch ($method) {
  case 'POST':
    echo $_REQUEST['nombre'];
    echo $_REQUEST['apellidos'];
    break;
  case 'GET':
    $arr = array('nombre' => 'Pedro', 'apellidos' => 'Sánchez');
    echo json_encode($arr);
    break;
  default:
    handle_error($request);
    break;
}
?>
