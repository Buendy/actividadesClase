<?php
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
  case 'POST':
    $encontrado=false;
    if (file_exists('categorias.json')) {
        $json_data = file_get_contents('categorias.json');
        $tempArray = json_decode($json_data);
        foreach ($tempArray as $valor) {
          if($valor->categoria==$_REQUEST['categoria']){
            $encontrado=true;
          }
        }

        if(!$encontrado){
          array_push($tempArray, $_REQUEST);
          $jsonData = json_encode($tempArray);
          file_put_contents('categorias.json', $jsonData);
          echo 'x';
        }else{
          echo 'Ya existe una categoria con el nombre '.$_REQUEST['categoria'];
        }

    }else {
        $arr = array( $_REQUEST );
        file_put_contents('categorias.json',json_encode($arr));
        echo 'x';
    }
    break;
  case 'GET':
        if (file_exists('categorias.json')) {
          $json_data = file_get_contents('categorias.json');
          $tempArray = json_decode($json_data);
          $arrayRetorno = array();
          foreach ($tempArray as $valor) {
            if($valor->tipo=='princiapal'){
              array_push($arrayRetorno,$valor);
            }
          }
          echo json_encode($arrayRetorno);
        }else {
          echo 'y';
        }
    break;
  default:
      handle_error($request);
    break;
}
?>
