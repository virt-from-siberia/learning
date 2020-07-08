
console.log('=============== PARAMETRS ===============');


function great(greeting = 'hello', name = 'Aleksey') {
    console.log(`${greeting } ${name }`);
}

great('Hi', 'Bill');
great('Hi');
great();


function sumES5() {
    console.log(arguments instanceof Array);

    var sum = 0;
    Array.prototype.forEach.call(arguments, function (value, index, array) {
        console.log(value);
        sum += value;
    });

    console.log(sum);
}

function sumES6(...values) {
    let newSum = 0;
    console.log(values);
    values.forEach(function (el) {
        newSum += el;
    });
    console.log(newSum);
}


function sumES6Reduce(...values) {
    console.log(values.reduce(function (prevValue, curentValue, index, array) {
        console.log('index ' + index);
        console.log('array ' + array);
        console.log('prevValue ' + prevValue);
        console.log('curentValue ' + curentValue);
        return prevValue + curentValue;
    }));
}

sumES5(3, 5, 21, 32, 657);
sumES6(3, 5, 21, 32, 657);
sumES6Reduce(3, 5, 21, 32, 657);