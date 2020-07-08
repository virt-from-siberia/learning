let a = {
    "one": "hello",
    "name": 23
}; console.log(a);

let b = a;

b.one = "two";

console.log(a.one);
console.log(b.one);

class Test {
    constructor(a) {
        this.c = a;
    }
}

let myObj = new Test(5);
console.log(myObj);
console.log(myObj.c);


let myObj2 = new Test(6);
myObj2.sum = 77;
console.log(myObj2);

