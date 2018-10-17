<?php

if ( ! isset($_POST['nombre'])){
  $errores['nombre'] = 'No he recibido el nombre.';

} elseif (strlen($_POST['nombre']) < 3) {
  $errores['nombre'] = 'El campo nombre es demasiado corto';

}

if (! isset($_POST['email'])) {
  $errores['email'] = 'No he recibido el email';

} elseif (strlen($_POST['email']) < 6) {
  $errores['email'] = 'El email no es válido';

}

if ( ! isset($_POST['clave1']) || ! isset($_POST['clave2'])){
  $errores['clave'] = 'No he recibido ambas claves';
} else {


  if (strlen($_POST['clave1']) < 5) {
    $errores['clave1'] = 'La clave debe tener 5 o más carácteres';

  }

  if($_POST['clave1'] != $_POST['clave2']) {
    $errores['clave2'] = 'Las claves deben de ser iguales';

  }
}


 ?>
