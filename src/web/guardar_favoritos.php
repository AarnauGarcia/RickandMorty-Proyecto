<?php
// Obtener los datos enviados mediante la solicitud POST
$usuarioId = $_POST['usuario_id'];
$favoritoId = $_POST['favorito_id'];

// Realizar la conexión a la base de datos
$host = 'localhost';
$user = 'nombre_usuario';
$password = 'contraseña';
$database = 'nombre_base_de_datos';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}

// Preparar la consulta para insertar el favorito en la tabla
$query = "INSERT INTO usuarios (usuario_id, favorito_id) VALUES (?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param('ii', $usuarioId, $favoritoId);

// Ejecutar la consulta y verificar el resultado
if ($stmt->execute()) {
    echo 'Favorito guardado correctamente.';
} else {
    echo 'Error al guardar el favorito.';
}

// Cerrar la conexión a la base de datos
$stmt->close();
$conn->close();
?>
