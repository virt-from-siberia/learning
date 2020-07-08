<?php

	// api ненастоящее, нет валидации token и прочих параметров
	// при работе с файловой системой валидация обязательна

	usleep(200000);
	
	include_once('inc/functions.php');	
	
	$res = false;
	$token = $_GET['token'] ?? null;
	
	if(!$token || !checkToken($token) || !file_exists("data/$token")){
		echo json_encode($res);
		exit();
	}

	file_put_contents("data/$token", json_encode([]));
	$res = true;
	echo json_encode($res);
	