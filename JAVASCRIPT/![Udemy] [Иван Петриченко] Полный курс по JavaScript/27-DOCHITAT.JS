var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
    var item = document.createElement('li');

    console.log(item);

    item.appendChild(document.createTextNode('Item ' + i));

    console.log(item);

    item.onclick = function (ev) {
        console.log('Item ' + i + ' is clicked.');
    };



    list.appendChild(item);
}

item.onclick = function (ev) {
    var lol = document.createTextNode('lol');
    item.appendChild(lol);
}
console.log(item);


var x = 'global_x';
let y = 'global_y';
console.log(this.x);
console.log(this.y);









let out = document.querySelector('.person');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(phrase) {
        return `${this.name} says ${phrase}`;
    }

    go(speed) {
        return `${this.name} going with the speed = ${this.speed}`;
    }

    sayAge() {
        console.log(`${this.name} says my age are  ${this.age}`);
    }

}

const aleksey = new Person('Aleksey', 33);
const asdasdas = aleksey.sayAge();


class Rectangle {
    constructor(p) {
        this.p = p;
    }
    say() {
        console.log(`this ${p} say LOL`);
    }
}

var p = new Rectangle('VARIABLE P'); // ReferenceError

p.say();

// 'use strict';

// // Создаётся объект promise
// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // переведёт промис в состояние fulfilled с результатом "result"
//         resolve("result");
//     }, 1000);

// });

// promise.then навешивает обработчики на успешный результат или ошибку
// promise
//     .then(
//         result => {
//             // первая функция-обработчик - запустится при вызове resolve
//             alert("Fulfilled: " + result); // result - аргумент resolve
//         },
//         error => {
//             // вторая функция - запустится при вызове reject
//             alert("Rejected: " + error); // error - аргумент reject
//         }
//     );


    // Промис выполнится сразу же
    var promise = new Promise((resolve, reject) => resolve(1));

    // PromiseState = "resolved"
    // PromiseResult = 1

    // Добавили обработчик к выполненному промису
    promise.then(alert); // ...он сработает тут же