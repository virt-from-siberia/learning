<?

$arr = [1, 3, 4, 356, 456, 34, true, "string"];

for ($i = 0; $i < count($arr); $i++) {
    echo $arr[$i] . '<br/>';
}

$arr_2 = ["name" => "Michael", "age" => 26];

echo $arr_2['name'];

$arr_3 = [[4, 2], [13, 5, 7], true, 'string', 24, [777, 888, 999]];

echo '<br/>';
echo $arr_3[0][1];
echo '<br/>';
echo $arr_3[1][1];

echo '<br/> =============================';
echo '<br/>';
for ($i = 0; $i < count($arr_3); $i++) {
    if (is_array($arr_3[$i])) {
        echo 'is array';
        echo '<br/>';
    } else {
        echo 'is not array';
        echo '<br/>';
        echo $arr_3[$i];
        echo '<br/>';
        continue;
    }
    for ($j = 0; $j < count($arr_3[$i]); $j++) {
        echo $arr_3[$i][$j] . '<br/>';
    }
}


$stuff = [
    [
        'name' => 'Michael',
        'age' => 26,
    ],
    [
        'name' => 'Alex',
        'age' => 30,
    ],
    [
        'name' => 'Igor',
        'age' => 34,
    ]
];
echo '<br/> =============================';
echo '<br/>';
echo $stuff[2]['age'];
echo '<br/>';



echo '<br/> =============================';
//ЦИКЛ FOR EACH

$arr_forEach = [1, 5, 6, true, false, "myString", 2.5];
foreach ($arr_forEach as $value) {
    echo $value . '<br/>';
}

$arr_forEach_hard = [
    [
        'name' => 'Michhael',
        'age' => 26
    ],
    [
        'name' => 'Alex',
        'age' => 34
    ]
];

foreach ($arr_forEach_hard as $key => $value) {
    echo $key . '---';
    foreach ($value as $el) {
        echo '<br/>';
        echo $el;
        echo '<br/>';
    }
}


$newArr = [];
for ($i = 0; $i < 10; $i++) {
    $newArr[$i] = $i * 5;
}
echo '<br/>';



foreach ($newArr as $key => $value) {
    $newArr[$key] = $value * 2;
}

foreach ($newArr as $value) {
    echo $value . ' , ';
}

// ОПЕРАЦИИ С МАССИВАМИ

$list = ["Michael", "Rusakov", 26];

list($firstname, $surname, $age) = $list;

echo '<br/>';
echo $firstname;
echo '<br/>';
echo $surname;
echo '<br/>';
echo $age;


echo '<br/> =============================';
echo '<br/>';
$arr_1 = ["name1" => "michael", "name2" => "igor"];
$arr_2 = ["name3" => "alex", "name4" => "homer"];
$com_arr =  $arr_1 + $arr_2;

foreach ($com_arr as $value) {
    echo $value . '<br/>';
}


echo "Элемент равен    {$arr_1["name1"]} ";
