<?php

	function generateToken(){
		$token = hash('sha256', mt_rand(1, 1000000) . time());
		
		while(file_exists("data/$token")){
			$token = hash('sha256', mt_rand(1, 1000000) . time());
		}
		
		file_put_contents("data/$token", json_encode([]));
		return $token;
	}
	
	function checkToken($token){
		return (bool)preg_match('/^[a-z0-9]{64,64}$/', $token);
	}
	
	function checkInt($some){
		return (bool)preg_match('/^[0-9]+$/', $some);
	}