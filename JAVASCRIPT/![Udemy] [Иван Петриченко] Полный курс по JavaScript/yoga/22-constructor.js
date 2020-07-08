function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('hello ' + this.name);
    }

}

User.prototype.exit = function (name) {
    console.log('Пользователь ' + this.name + ' ушол');
}

let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);
ivan.hello();
ivan.exit();


function Calculator() {

    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

var calculator = new Calculator();
calculator.read();

var calculator = new Calculator();

// Calculator.read();




class Calc {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
    sum() {
        this.sum = function () {
            return this.a + this.b;
        }
    }
    mul() {
        return this.a * this.b;
    }

}

let calc = new Calc();

calc.watch = function(){
    alert(this.sum);
}

calc.read();
console.log(calc.sum);