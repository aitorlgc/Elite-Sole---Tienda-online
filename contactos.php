<?php
// Comprobamos si recibimos datos por POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recogemos variables
    $nombre = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : null;
    $correo = isset($_REQUEST['correo']) ? $_REQUEST['correo'] : null;
    // Variables
    $hostDB = '127.0.0.1';
    $nombreDB = 'elite_sole';
    $usuarioDB = 'root';
    $contrasenyaDB = 'Barsa2003.';
    // Conecta con base de datos
    $hostPDO = "mysql:host=$hostDB;dbname=$nombreDB;";
    $miPDO = new PDO($hostPDO, $usuarioDB, $contrasenyaDB);
    // Prepara INSERT
    $miInsert = $miPDO->prepare('INSERT INTO contactos (nombre, correo) VALUES (:nombre, :correo)');
    // Ejecuta INSERT con los datos
    $miInsert->execute(
        array(
            'nombre' => $nombre,
            'correo' => $correo,
        )
    );
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Crear - CRUD PHP</title>
    <script>
        function mostrarAlerta() {
            alert("Se ha enviado correctamente");
        }
    </script>
</head>
<body>
    <form action="" method="post" onsubmit="mostrarAlerta()">
        <p>
            <label for="nombre">Nombre</label>
            <input id="nombre" type="text" name="nombre">
        </p>
        <p>
            <label for="correo">Correo electrónico</label>
            <input id="correo" type="text" name="correo">
        </p>
        <p>
            <input type="submit" value="Enviar solicitud">
        </p>
    </form>
</body>
</html>
