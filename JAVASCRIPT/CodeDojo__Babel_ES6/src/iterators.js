console.log('=============== ITERATORS ===============');

let xmen = ['Cyclops', 'Wolverine', 'Rouge'];


for (let men in xmen) {
    console.log(men);
}

let iterator = xmen[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.length);

let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id++;
                let done = false;
                return {
                    value,
                    done
                };
            }
        };
    }
};


for (let id of idGenerator) {
    console.log(id);
    if (id > 100) {
        break;
    }
}