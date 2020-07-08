

let a = [3, 4, 5];
a[5] = 9;

// for (let i = 0; i < a.length; i++) {
//     a[i] = a[i] * 2;

// }
// console.log(a);





// let b = a.map(function (currentValue, index, array) {
//     return newAray;
// });


let c = a.map(function (current) {
    console.log(current);
    return current * 2;
});

console.log(c);




