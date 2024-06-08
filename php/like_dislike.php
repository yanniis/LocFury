<?php
$host = 'localhost';
$dbname = 'locfury_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents("php://input"));

    $email = $data->email;
    $action = $data->action;
    $car = $data->car;

    $stmt = $pdo->prepare("INSERT INTO likes_dislikes (email, action, car) VALUES (:email, :action, :car)");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':action', $action);
    $stmt->bindParam(':car', $car);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>
