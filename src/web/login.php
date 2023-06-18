<?php

session_start();

if (isset($_SESSION['user_id'])) {
  header('Location: http://localhost:3000');
}
require 'database.php';

if (!empty($_POST['Usuario']) && !empty($_POST['Contraseña'])) {
  $records = $conn->prepare('SELECT id, user, passwd FROM users WHERE user = :user');
  $records->bindParam(':user', $_POST['Usuario']);
  $records->execute();
  $results = $records->fetch(PDO::FETCH_ASSOC);

  $message = '';

  if (count($results) > 0 && password_verify($_POST['Contraseña'], $results['passwd'])) {
    $_SESSION['user_id'] = $results['id'];
    header("Location: http://localhost:3000");
  } else {
    $message = 'Las credenciales no son correctas.';
  }
}

?>


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Login</title>
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

  <h1>Login</h1>
  <span>or <a href="registro.php">SignUp</a></span>

  <form action="login.php" method="POST">
    <input name="Usuario" type="text" placeholder="Introduce tu nombre de usuario">
    <input name="Contraseña" type="password" placeholder="Introduce tu contraseña">
    <input type="submit" value="Enviar">
  </form>
</body>

</html>