class User {
    constructor() {
        this.name = "Kostya";
    }

    sayHello() {
        console.log("hello");
    }
}

const kostya = new User();

kostya.sayHello();
console.log(kostya.name);
