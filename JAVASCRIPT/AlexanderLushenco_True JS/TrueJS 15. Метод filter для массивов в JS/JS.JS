let a = [3, -12, 0, 4, 5, -8];



let c = a.filter(function (currentElement, index, array) {
    return currentElement > 0;
});

console.log(c);
