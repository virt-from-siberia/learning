
// 'use strict';
let numbers = {
    numberA: 5,
    numberB: 10,
    sum: function () {
        console.log(this === numbers); // => true
        function calculate() {
            console.log(this === numbers); // => true
            return this.numberA + this.numberB;
        }
        // use .call() method to modify the context
        return calculate.call(this);
    }
};
console.log(numbers.sum()); // => 15


var obj = {
    myFunction : function(){
        return new Date().toString();
    }
};
// obj.myFunction = function () {
//     return new Date().toString();
// };


console.log(
    obj.myFunction() // method invocation
);

var calc = {
    num: 0,
    increment: function () {
        console.log(this === calc); // => true
        this.num += 1;
        return this.num;
    }
};
// method invocation. this is calc
console.log(calc.increment()); // => 1
console.log(calc.increment()); // => 2

let more = document.querySelector('.more');
let overlay = document.querySelector('.slider');
let popub = document.querySelector('.popub-close');

more.addEventListener('click', function(){
    overlay.getElementsByClassName.display = 'block';
    this.classList.add('.more-splash');
})