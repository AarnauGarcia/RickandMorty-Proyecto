<?php
$server = 'localhost';
$username = 'root';
$password = '';
$database = 'rm_users';

try {
    $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
    die('Conexión fallida: ' . $e->getMessage());
}
?>