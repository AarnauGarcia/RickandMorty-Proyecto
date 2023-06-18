<?php
require "database.php";

$message = '';

if (!empty($_POST['Usuario']) && !empty($_POST['Contraseña'])) {
  $sql = "INSERT INTO users (user, passwd) VALUES (:user, :passwd)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':user', $_POST['Usuario']);
  $password = password_hash($_POST['Contraseña'], PASSWORD_BCRYPT);
  $stmt->bindParam(':passwd', $password);

  if ($stmt->execute()) {
    $message = 'Usuario creado correctamente.';
  } else {
    $message = 'Lo sentimos, no se ha podido crear el usuario.';
  }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/estilos.css">
</head>

<body>
  <?php require "partials/header.php" ?>
  <?php if (!empty($message)): ?>
    <p>
      <?= $message ?>
    </p>
  <?php endif; ?>

  <h1> Registro </h1>
  <span>o <a href="login.php">Accede</a></span>

  <form action="registro.php" method="POST">
    <input name="Usuario" type="text" placeholder="Introduce tu usuario">
    <input name="Contraseña" type="password" placeholder="Introduce tu contraseña">
    <input name="confirmarCon" type="password" placeholder="Introduce de nuevo tu contraseña">
    <input type="submit" value="Enviar">
  </form>
</body>

</html>