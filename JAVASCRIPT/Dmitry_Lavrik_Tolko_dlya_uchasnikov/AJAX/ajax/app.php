<?php

sleep(1);

$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);

$errors = [];

if ($email == '') {
    $errors['email'] = 'Заполните Email';
}
if ($phone == '') {
    $errors['phone'] = 'Заполните Телефон';
}
if ($name == '') {
    $errors['name'] =  'Заполните Имя';
}

$response = ['res' => empty($errors), 'errors' => $errors];

if ($response) {

    file_put_contents('apps.txt', "$email $phone $name \n", FILE_APPEND);
}


echo json_encode($response);
