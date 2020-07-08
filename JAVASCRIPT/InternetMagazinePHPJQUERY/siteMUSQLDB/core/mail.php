<?php
// читать json файл
$json = file_get_contents('../goods.JSON');
$json = json_decode($json, true);

//письмо
$message = '';
$message .= '<h1>Заказ в магазине</h1>';
$message .='<p>Телефон: '.$_POST['phone'].'</p>';
$message .='<p>Почта: '.$_POST['email'].'</p>';
$message .='<p>Клиент: '.$_POST['ename'].'</p>';
$message .='<p> '.$_POST['datetime'].'</p>';

$cart = $_POST['cart'];
$sum = 0;
foreach ($cart as $id=>$count) {
    $message .=$json[$id]['ename'].' --- ';
    $message .=$count.' --- ';
    $message .=$count*$json[$id]['cost'];
    $message .='<br>';
    $sum = $sum +$count*$json[$id]['cost'];
}
$message .='Всего: '.$sum;

//print_r($message);

$to = 'alonso85@mail.ru'.','; //не забудь поменять!
$to .=$_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Заказ в магазине', $spectext.$message.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}
