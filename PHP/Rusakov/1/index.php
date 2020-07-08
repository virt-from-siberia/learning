<?
$a = 5;
$b = 7;
echo isset($a);
echo '<br/>';
echo 'lol';

$x = 15;
echo '<br/>';
echo gettype($x);
$x = (float) $x;
echo '<br/>';
echo gettype($x);

$str = 'Helloy';
echo '<br/>';
echo is_string($str);


$str_number = '12345';
echo '<br/>';
echo ((int) $str_number);
$str_number_next = (int) $str_number;
echo '<br/>';
echo gettype($str_number_next);


//ЖЕСТКИЕ ССЫЛКИ
$n = 10;
$y = &$n;
$n = 5;
echo '<br/>';
echo $y;

$y = 7;
echo '<br/>';
echo $n;

unset($n);
echo '<br/>';
echo $y;

//СИМВОЛИЧЕСКИЕ ССЫЛКИ
$a = 3;
$b = 'a';
echo '<br/>';
echo $$b;

//КОНСТАНТЫ
define('COLOR', 'red');
echo '<br/>';
echo COLOR;
echo defined('COLOR');

//ВСТРОЕННЫЕ КОНСТАНТЫ PHP

echo '<br/>';
echo __FILE__;
echo '<br/>';
echo PHP_VERSION;

?>

<p style=" color: <?= COLOR ?> ; font-weight: bold;">Hello World</p>

<?
define('FONT_SIZE_20', '40px');
?>
<p style=" font-size: <?= FONT_SIZE_20 ?> ; font-weight: bold;">Hello World</p>
<?

//СТРОКОВЫЕ ПЕРЕМЕННЫЕ
$s_1 = 'My string';
$s_2 = 'New string';

echo $s_1 . ' ' . $s_2 . '<br/>';

echo '<br/>';
echo "<br/> Символ  с ииндексом 3 (позиция №4) в строке \"$s_1\": <b>" . $s_1[3] . "<b/>";
echo '<br/>';
echo '';

echo '<br/>';
echo 'Тут переменная $s_1 не подставится';
echo '<br/>';
echo "Тут переменная $s_1 не подставляется";
echo '<br/>';
echo "<br/> Тут будет ошибка $s_1N";
echo '<br/>';
echo "<br/> Тут НЕ будет ошибка {$s_1}N";

$res = `date`;
echo '<br/>';
echo $res;

echo '<br/>';
echo iconv("CP866", "UTF-8", $res);

$my_age_str = 'Мой возраст';
$my_age_num = 30;
$full_age = $my_age_str . ' ' . $my_age_num . ' Лет';
?>

<h1><?= $full_age ?></h1>

<?
// ЛОГИЧЕСКИЕ ОПЕРАНДЫ

$x = 10;
$y = 0;
$b_1 = $x >= 10;
$b_2 = $y == 0;
echo '<br/>';
echo "x = $x; y = $y<br/>";
echo "x > 10 = $b_1; (y == 0) = $b_2<br/>";


$t_1 = true;
$t_2 = false;
echo "b_1 = $b_1; b_2 = $b_2<br/>";

//ОТРИЦАНИЕ

echo "Отрицание b_1 : !$b_1<br/>";
echo "Отрицание b_1 : " . !$b_1 . "<br/>";
echo "b_1 ИЛИ b_2 : " . ($b_1 || $b_2) . "<br/>";
echo "b_1 ИСКЛЮЧАЮЩЕЕ И b_2 : " . ($b_1 xor $b_2) . "<br/>";

//ОПЕРАТОР IF-ELSE

$o = 7;
if ($o < 10) {
    echo 'x меньше 10';
} else {
    echo 'x больше 10';
}

if ($o < 7) {
    echo 'x меньше 7 ';
} elseif ($o > 7) {
    echo 'x больше 10';
} else {
    echo 'x равен 10';
}

$com_1 = 10;
$com_2 = 15;


if (isset($_GET["com"])) {
    $com = $com =  $_GET["com"];
    // $com = $com = htmlspecialchars($_GET["com"]);
} else {
    $com = false;
}

echo '<br/>';
echo $com;
?>

<div>
    <a href="?com=add">
        <h1>Сложить</h1>
    </a>
    <a href="?com=mult">
        <h1>Перемножить</h1>
    </a>
</div>

<?

//ЦИКЛ FOR
for ($i = 0; $i < 3; $i++) {
    echo '<br/>';
    echo 'Hello';
}

//Оператор switch-case

echo '<br/>';
$v = 2;
if (gettype($v) == 'string') echo 'v - это строка';
elseif (gettype($v) == 'integer') echo 'v - это число';
elseif (gettype($v) == 'boolean') echo 'v - это boolean';
else echo 'v - это неизвесный тип';


echo '<br/>';
switch (gettype($v)) {
    case 'string':
        'v - это строка';
        break;
    case 'integer':
        'v - это число';
        break;
    case 'boolean':
        'v - это boolean';
        break;
    default:
        echo 'v - это неизвесный тип';
};

$car1 = 2;
$car2 = 2;

switch ($car1 <=> $car2) {
    case 0:
        echo "$car1 = $car2";
        break;
    case 1:
        echo "$car1 > $car2";
        break;
    case -1:
        echo "$car1 < $car2";
        break;
    default:
        echo 'case undefined';
}
