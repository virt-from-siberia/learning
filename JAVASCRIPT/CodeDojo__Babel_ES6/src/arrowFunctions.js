console.log('=============== ARROW FUNCTIONS ===============');

function add(x, y) {
    return x + y;
}

console.log(add(2, 5));

let arrow = (x, y) => x + y;

console.log(arrow(5, 5));
console.log(typeof (arrow));


let square = (x) => x * x;
console.log(square(10));

let circle = i => i * i;

console.log(circle(6));

let geveMeAnswer = () => 42;

console.log(geveMeAnswer());

let report = () => console.log('report');

report();

let multilpy = (x, u) => {
    let resault = x * u;
    return resault
}

console.log(multilpy(3, 3));

let getPersone = () => {
    return {
        name: 'John'
    }
};


console.log(getPersone());


(function () {
    console.log('IIFE');
})();

(() => console.log('IIFE ARROW FUNCTION'))();

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbersArray.forEach(function (num) {
    sum += num;
});

console.log(sum);

numbersArray.forEach((num) => sum += num);

console.log(sum);


let personArrow = {
    name: 'Bob',
    greet: function () {

        setTimeout(function () {
            console.log('Hello, my name is ' + this.name);
            console.log(this);
        }, 2000);
    }
}
personArrow.greet();

let personArrowFunc = {
    name: 'BobArrow',
    greet: () => {
        console.log('Hello, my name is ' + this.name);
        console.log(this);
    }
}

personArrowFunc.greet();