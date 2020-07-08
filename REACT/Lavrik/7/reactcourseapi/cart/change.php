<?php

	// api ненастоящее, нет валидации token и прочих параметров
	// при работе с файловой системой валидация обязательна

	usleep(200000);
	
	include_once('inc/functions.php');
	
	$token = $_GET['token'] ?? null;
	$id = $_GET['id'] ?? null;
	$cnt = $_GET['cnt'] ?? null;
	$res = false;
	
	if(!$token || !$id || !$cnt || 
		!checkToken($token) || !checkInt($id) || !checkInt($cnt) ||
		!file_exists("data/$token")){
		echo json_encode($res);
		exit();
	}
	
	$cart = json_decode(file_get_contents("data/$token"), true);
	
	if(!isset($cart[$id])){
		echo json_encode($res);
		exit();
	}
	
	$cart[$id]['cnt'] = (int)$cnt;
	
	file_put_contents("data/$token", json_encode($cart));
	$res = true;
	echo json_encode($res);
	