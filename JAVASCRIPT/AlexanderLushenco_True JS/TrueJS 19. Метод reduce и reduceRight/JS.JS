let arr = [3, 4, 5, 6, 7, 8, 9];

let a = arr.reduce(function (accum, curentValue,index) {
    console.log('accum = ' + accum);
    console.log('index = ' + index);
    console.log('curentValue = ' + curentValue);

    return accum + curentValue;
});

console.log(a);