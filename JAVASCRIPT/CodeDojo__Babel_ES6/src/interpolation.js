
console.log('=============== INTERPOLATION ===============');


function greet(name) {
    console.log(`hello  ${name}`);
}

greet('Bill');


function createElemnt(to, from, message) {
    console.log(`
        to: ${to}
        from: ${from}
        Message: ${message}
        `);
}

createElemnt('Алексею', 'Ивана', 'Привет');

function add(x, y) {
    console.log(`${x} +  ${y} = ${parseInt(x)+ parseInt(y)}`);
}


add('3', '5');


let name = 'Bill';
let omg = 'Alex';
console.log(upperName `Hello ${name}${omg}`);

function upperName(literals, ...value) {
    console.log(literals);
    console.log(value);
    return literals[0] + value[0].toUpperCase();
}