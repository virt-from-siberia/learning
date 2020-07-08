"use strict";

window.onload = function (e) {

    const a = {
        some: 1
    };
    let i = 10;

    for (let i = 0; i < 100; i++) {

    }

    a.some1 = 1;
    console.log(a);
    console.log(`Значение i = ${i} - ура! А значение а = ${a.some} - ага!`);

    let items = document.querySelectorAll('.items .item');
    let divPrice = document.querySelector('.value');

    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            this.classList.toggle('item-active');
            calcPrice();
        }
    }

    function calcPrice() {
        let price = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('item-active')) {
                price += parseInt(items[i].getAttribute('data-price'));
            }
        }

        divPrice.innerHTML = price;
    }

    console.log(sum(1, 2, 3, 4, 5));

    let t = new Timer(500);
    t.tick();
    t.tick();
    t.tick();

    t.start();

    let min = (a, b) => a - b;

    let divide = (a, b) => {
        if (b == 0) {
            return null;
        }

        return a - b;
    }

    console.log(min(5, 3));
}

function sum(...args) {
    let sum = 0;

    for (let val of args) {
        sum += val;
    }

    return sum;
}

class Timer {
   constructor (time) {
   this.time = time;
   }
   tick(){
       this.time--;
       console.log(this.time);
   }
   start(){
       setInterval(() => { 
           this.tick();
        }, 1000);
   }
}