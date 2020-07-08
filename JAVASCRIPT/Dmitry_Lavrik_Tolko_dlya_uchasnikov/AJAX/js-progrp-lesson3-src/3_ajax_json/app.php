<?php
	
	$email = trim($_POST['email']);
	$phone = trim($_POST['phone']);
	$name = trim($_POST['name']);
	$dt = date('Y-m-d H:i:s');
	
    $errors = [];
    
	if($email == ''){
		$errors['email'] = 'Email не может быть пустым';
	}
	elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		$errors['email'] = 'Введите корректный email';
	}
    
    if($phone == ''){
		$errors['phone'] = 'Телефон не может быть пустым';
	}
    
    if($name == ''){
		$errors['name'] = 'Имя не может быть пустым';
	}
    
    $response = ['res' => empty($errors), 'errors' => $errors];
    
	if($response){
		file_put_contents('apps.txt', "$dt $email $phone $name \n", FILE_APPEND);
	}
    
    echo json_encode($response);
