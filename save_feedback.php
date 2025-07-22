<?php
// Настройки подключения к БД
$db = new PDO('mysql:host=localhost;dbname=hair_salon', 'root', '');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['name']) && !empty($_POST['message'])) {
    try {
        $stmt = $db->prepare("INSERT INTO feedback (name, message) VALUES (?, ?)");
        $stmt->execute([$_POST['name'], $_POST['message']]);
        header("Location: svyaz.html?status=success");
    } catch (PDOException $e) {
        header("Location: svyaz.html?status=error");
    }
    exit;
}

header("Location: svyaz.html");