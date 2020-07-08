function one(a) {
    console.log(a);
    console.log(arguments);
    let b;
    for (let i = 0; i < arguments.length; i++) {
        console.log("arguments --- " + arguments[i]);
    }
    b = Array.from(arguments);
    console.log("arrayFrom - " + b);
}
one(5, 4, 5, 5, 4, 3, 5, 6);