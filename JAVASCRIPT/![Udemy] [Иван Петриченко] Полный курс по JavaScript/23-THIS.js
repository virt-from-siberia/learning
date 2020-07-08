// 'use strict';

// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

let obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);

        function shout() {
            console.log(this);
        }
        shout();
    }
}

obj.sum();

let user = {
    name: "John"
}

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number) {
    return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));




let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    console.log(this);
    let btnSty = this.style.backgroundColor;
    if (btnSty = 'red') {
        btnSty = 'yellow';
    }else{
        btnSty = 'red';
    }
    
})



// 1) Просто вызов функции -window / undefined
// 2) Метод обьекта - this = обьект
//3) конструктор (new) - this  =  новый созданный обьект
//4) Укозание конкретного контекста - call, apply, bind