let numbers = [1, 10, 15, 23, 23, -5, 23, -10];
let neg = [];

numbers.forEach(function (number, iteration) {
    console.log("number : " + number);
    console.log("iteration : " + iteration);
});

console.log('========================================');

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        neg.push(numbers[i]);
    }
}
console.log(neg);
console.log('========================================');

let neg2 = numbers.filter(function (number) {
    return number < 0;
});

console.log(neg2);
console.log('========================================');


let numberNext = numbers.map(function (number) {
    return parseInt(number);
});

console.log(numberNext);
console.log('========================================');


let array3 = [1, -10, 15, 34, 45, -6, 34];

let allPos = true;

for (let i = 0; i < array3.length; i++) {
    if (array3[i] < 0) {
        allPos = false;
        break;
    }
}

console.log(allPos);
console.log('========================================');

let allPos2 = array3.every(function (number) {
    return number >= 0;
});

console.log(allPos2);
console.log('========================================');


let array4 = [1, 10, 15, 34, 45, 6, 34];

let sum = 0;

for (let i = 0; i < array4.length; i++) {
    sum += array4[i];
}

console.log(sum);
console.log('========================================');


let sum2 = array4.reduce(function (total, nember) {
    console.log(total + " +++ total +++ ");
    console.log(nember + " === numbber ===");
    return total + nember;
}, 0);

console.log(sum2);
console.log('========================================');



function isEven(item) {
    if ((item % 2) == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(66));
console.log('========================================');


let textArray = [3, 234, 4, 4, 2, 324, 4, 4, 345, 345, 454, 66, 7, 67];


// function newIsEven(number) {
//     return number % 2 === 0;
// }


console.log(textArray);

let newTextArray = textArray.filter(function newIsEven (number) {
    return number % 2 === 0;
});


console.log(newTextArray);