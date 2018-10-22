




<div class="animated once fadeIn delay-0s">
<div class="row">
  <div class="col-md-12">
    <img src="cabeceras_azul2.jpg" alt="" width="100%">
  </div>

</div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark animated once fadeIn delay-0s">
  <a class="navbar-brand" href="#">Barra de navegación:</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="inicio.html">Inicio<span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.php">Registrarse<span class"sr-only"></span></a>
      </li>

      </ul>
  </div>
</nav>



  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-4">

      <div class="todo">

      <div class="animated once fadeIn delay-0s">
        <br>
        <div class="animated once bounceIn delay-0s">
          <?php mostrar_error_campo('nombre', $errores);  ?>
        </div><br>
        <div class="animated once bounceIn delay-0s">
          <?php mostrar_error_campo('email', $errores);   ?>
        </div><br>
        <div class="animated once bounceIn delay-0s">
          <?php mostrar_error_campo('clave1', $errores);  ?>
        </div><br>

      <form class="" action="<?= $_SERVER['PHP_SELF']  ?>" method="post">
        <div class="form-group">
          <p>
            <label for="nombre">Nombre</label>
          </p>
        </div>

        <div class="form-group">
          <p>
            <input type="text" name="nombre" class="form-control" required placeholder="Daniel"
            <?php mostrar_campo("nombre"); ?> >
          </p>
        </div>

        <div class="form-group">
          <p>
            <label for="email">Email</label>
          </p>
        </div>

        <div class="form-group">
          <p>
            <input type="email" name="email" class="form-control" required placeholder="correo@dominio.com" title="Rellena el campo con un formato válido: php@gmail.com"
            <?php mostrar_campo("email"); ?>  >
            <small id="mensajeEmail" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
          </p>
        </div>

        <div class="form-group">
          <p>
            <label for="clave1">Contraseña</label>
          </p>
        </div>

        <div class="form-group">
          <p>
            <input type="password" name="clave1" value="" class="form-control" required>
          </p>
        </div>


        <div class="form-group">
          <p>
            <label for="clave2">Repetir contraseña</label>
          </p>
        </div>

        <div class="form-group">
          <p>
            <input type="password" name="clave2" value="" class="form-control" required>
          </p>
        </div>

        <p>
          <div class="form-group"><br>
          <label for="">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </label>
        </p>
        </div>

    </form>
  </div>
  </div>
  </div>


  <div class="col-md-7">



  </div>
</div>
