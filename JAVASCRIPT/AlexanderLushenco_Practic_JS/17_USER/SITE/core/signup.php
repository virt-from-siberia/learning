<?php
require_once 'config.php';

$name = trim($_POST['name']);
$pass = trim($_POST['']);
$email = trim($_POST['email']);
$birthday = trim($_POST['birthday']);
$sex = trim($_POST['sex']);

// if ($name == '' or $pass == '' or $email == '' or $birthday == '' or $sex == '') {
//     echo 2;
//     die;
// }

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users (name, email, password, birthday, sex) VALUES ('" . $name . "', '" . $email . "', '" . $pass . "', '" . $birthday . "', '" . $sex . "')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
