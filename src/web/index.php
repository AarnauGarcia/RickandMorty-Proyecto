<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rick&Morty API</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/estilos.css">
</head>

<body>

    <?php require "partials/header.php" ?>

    <h1>Bienvenido a la página inicial de Rick & Morty</h1>

    <a href="login.php"> Accede</a>
    <a href="registro.php"> registrate</a>

    <script>
        // Hacer una solicitud a la API utilizando JavaScript
        fetch('http://192.168.1.33:3000')
            .then(response => response.json())
            .then(data => {
                // Utilizar los datos de la API para mostrarlos en la página
                console.log(data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud a la API:', error);
            });
    </script>

</body>
<footer>
    <p>Página hecha por Arnau García </p>
    <a href="" target="_blank">@AarnauGarcia</a>
</footer>

</html>