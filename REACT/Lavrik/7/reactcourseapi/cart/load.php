<?php

	// api ненастоящее, нет валидации token и прочих параметров
	// при работе с файловой системой валидация обязательна

	usleep(200000);
	
	include_once('inc/functions.php');
	
	$res = [
		'cart' => [],
		'token' => '',
		'needUpdate' => false
	];
	
	$token = $_GET['token'] ?? null;
	
	if(!$token || !checkToken($token) || !file_exists("data/$token")){
		$res['token'] = generateToken();
		$res['needUpdate'] = true;
	}
	else{
		$res['token'] = $token;
		$cartObj = json_decode(file_get_contents("data/$token"), true);
		$res['cart'] = array_values($cartObj);
	}
	
	echo json_encode($res);
	
	
	