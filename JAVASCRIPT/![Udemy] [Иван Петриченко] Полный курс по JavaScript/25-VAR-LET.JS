function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var itemOfArray = function () {
            console.log(i);
        };
        items.push(itemOfArray);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();



let fun = () => {
    console.log(this);
};

fun();

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
}

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    }
    show();
});

function calcOrDouble(number, basis = 2) {
    number = number || 0;
    basis = basis || 2;
    console.log(number * basis);
}

calcOrDouble(3, 5);
calcOrDouble(6);
calcOrDouble();

