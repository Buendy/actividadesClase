<?php include('funciones.php') ?>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Formularios usables</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/formulario1/estilos.css">
  </head>
  <body>


    <?php
      $errores = [];
      if (! $_POST) {
        include('form.php');
      } else {

        include('validaciones.php');

        if ($errores) {      
          include('form.php');
        } else {
          echo 'Todo bien, se registra el usuario';
        }
      }


     ?>


  </body>
</html>
