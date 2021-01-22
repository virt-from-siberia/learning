function* createNumbers(): IterableIterator<number> {
    let n = 0
    while (1) {
        yield n++
    }
}


let numbers = createNumbers()

console.log(numbers.next())