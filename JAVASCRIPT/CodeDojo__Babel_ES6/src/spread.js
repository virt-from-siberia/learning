
console.log('=============== SPREAD ===============');
let staticLanguages = ['c', 'c++', 'java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];


let Languages = [...staticLanguages, 'c#', ...dynamicLanguages, ' Python'];

console.log(Languages);

function add(x, y, z, ) {
    console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers);