<?

// ФУНКЦИИ

function hello()
{
    echo "Hello";
}

hello();


function summaN()
{
    $summa = 0;
    for ($i = 0; $i < func_num_args(); $i++) {
        if (!is_numeric(func_get_arg($i))) {
            echo 'Параметры должны быть числами';
            echo '<br/>';
        } else {
            $summa += func_get_arg($i);
            echo '<br/>';
            echo $summa;
            echo '<br/>';
        }
    }
    return $summa;
}

function change(&$x)
{
    $x++;
}

$a = 5;
change($a);

echo '<br/>';
echo $a;

echo '<br/>';
echo summaN(19, 23, 345, 345, true,  1 - 5, -50, 90);
echo summaN(19, 23, 345, 345, "string ", -50, 90);




function diff(int $a, int $b): int
{
    return $a - $b;
}

echo '<br/>';
echo diff(10, 5);

echo '<br/>';
echo diff(9.4, 5.7);

// ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ

echo '<br/> ================================';

$x  = 5;

function func($x)
{
    $a = 8;
    $x++;
}

function testGlobal()
{
    $GLOBALS['x']++;
}

function getCount()
{
    static $count = 1;
    $count++;
    return $count;
}

func(10);
testGlobal();
echo '<br/>';
echo $x;


$var = 10;
foreach ($GLOBALS as $key => $value) {
    if (is_array($value)) {
        continue;
    }
    echo "$key = $value;<br/>";
}

echo '<br/>';
echo '<br/>';
echo '<br/>';
echo getCount() . '<br/>';
echo getCount() . '<br/>';
echo getCount() . '<br/>';
