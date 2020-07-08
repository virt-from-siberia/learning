<?php


echo "Hello world "  .  " yeah!";

$name = "John";

echo "<br>" . $name;

echo "<br>";

if (5 > 3) {
    echo "nice";
} else { }

$monthes = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august'];
$person = [
    "name" => "John",
    "surname" => "Doe",
    "age" => 27,
    "month" => [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august'
    ]
];

echo "<br>";

foreach ($monthes as $month) {
    if ($month == 'february') { } else {
        echo $month . '<br>';
    }
}

echo $person["name"];
echo "<br>";
echo $person["age"];
echo "<br>";
echo $person["surname"];
echo "<br>";
echo $person["month"][4];

echo "<br>";
echo "<br>";
echo "<br>";

foreach ($monthes as $month) {
    echo $month . PHP_EOL;
}

error_reporting(E_ALL);

