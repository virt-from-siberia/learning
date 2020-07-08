class UserES6 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello () {
        console.log('hello ' + this.name);
    }
    exit() {
        console.log('Пользователь ' + this.name + ' ушол');
    }
}

let max = new UserES6('Ivan', 25);
let sergey = new UserES6('Alex', 20);

console.log(max);
console.log(sergey);
max.hello();
max.exit();