<?php

// sleep(1);

$countries = array(
	'rus' => 'Россия',
	'fra' => 'Франция',
	'spa' => 'Испания'
);

$towns = array(
	'rus' => array(
		'msk' => 'Москва',
		'spb' => 'Санкт-Петербург'
	),
	'fra' => array(
		'par' => 'Париж',
		'niz' => 'Ницца',
		'mar' => 'Марсель'
	),
	'spa' => array(
		'mad' => 'Мадрид',
		'bar' => 'Барселона',
		'val' => 'Валенсия'
	)
);

$tours = array(
	'msk' => array(13500, 14500, 20000),
	'spb' => array(3500, 4500, 2000),
	'par' => array(43500, 12300, 20000),
	'niz' => array(33500, 14500, 20000),
	'mar' => array(13500, 33500, 43500),
	'mad' => array(43500, 14500, 33500),
	'bar' => array(13500, 43500, 17500),
	'val' => array(43500, 14500, 20000)
);

$answer = '';

switch ($_GET['action']) {
	case 'countries':
		$answer = $countries;
		break;
	case 'towns':
		$cnt = $_GET['country'];
		$answer = $towns[$cnt];
		break;
	case 'tours':
		$t = $_GET['town'];
		$answer = $tours[$t];
		break;
}

echo json_encode($answer);
