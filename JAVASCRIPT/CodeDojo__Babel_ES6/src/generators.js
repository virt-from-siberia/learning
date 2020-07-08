console.log('=============== GENERATORS ===============');

function* generate() {

    console.log('start');
    yield 1;
    console.log('Finish');
}

generate();
console.log(typeof generate);
let iter = generate();
console.log(iter.next());
iter.next();