<head>
  <link rel="stylesheet" href="/formulario1/estilos.css">
</head>
<?php

function mostrar_errores($errores){
  echo '<ul class="listaErrores">';
  foreach ($errores as $error) {
    echo "<li>$error</li>";
  }
  echo "</ul>";
}

function mostrar_campo($campo){
  if (isset($_POST[$campo])){
    echo ' value="' . $_POST[$campo] . '"';
  }
}

function mostrar_error_campo($campo, $errores){
  if (isset($errores[$campo])){
    echo '<div id="Lista"';
    echo '<span>' . $errores[$campo] . '</span>';
    echo '</div>';
  }
}


 ?>
