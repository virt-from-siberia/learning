<?php
$time = $_POST['date'];
$result = array(
    "l" => date('l', strtotime($time)),
    "D" => date('D', strtotime($time)),
    "d" => date('d', strtotime($time)),
    "j" => date('j', strtotime($time)),
    "m" => date('m', strtotime($time)),
    "F" => date('F', strtotime($time)),
    "M" => date('M', strtotime($time)),
    "n" => date('n', strtotime($time)),
    "t" => date('t', strtotime($time)),
    "Y" => date('Y', strtotime($time)),
    "y" => date('y', strtotime($time)),
);

echo json_encode($result);
