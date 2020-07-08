function sayHi() {
    return "hi";
    return "word";
}

const result = sayHi();
console.log(result);

function* sayHiGenerator() {
    yield "hey";
    return "hi";
}

const resaultGenerator = sayHiGenerator();
console.log(resaultGenerator.next());
console.log(resaultGenerator.next());
console.log(resaultGenerator.next());

const resultGenerator 
