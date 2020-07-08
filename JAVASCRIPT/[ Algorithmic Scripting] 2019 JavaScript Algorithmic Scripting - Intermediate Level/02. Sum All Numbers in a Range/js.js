// BASIC

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;

    for (var i = min; i <= max; i++) {
        temp += i;
    };
    return temp;
}

console.log(sumAll([3, 1]));
console.log(sumAll([1, 5]));

//INTERMEDIADE

function sumAllINTERMEDIADE(arr) {
    var sortedArr = arr.sort((a, b) => a - b);
    var firstNum = arr[0];
    var lastNum = arr[1];
    var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;

    return sum;
}

console.log(sumAllINTERMEDIADE([3, 1]));
console.log(sumAllINTERMEDIADE([8, 10]));


//ADVANCED

function sumAllADVANCED(arr) {
    var sum = 0;

    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAllADVANCED([3, 12]));
console.log(sumAllADVANCED([8, 10]));