//CASE BASIC

function slasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3, 4, 5, 6, 7], 2));

//CASE INTERMEDIATE

function slasherINTERMEDIATE(arr, howMany) {
    return arr.slice(howMany);
}

console.log(slasherINTERMEDIATE([1, 2, 3], 2));
console.log(slasherINTERMEDIATE([1, 2, 3, 4, 5, 6, 7], 2));

//CASE ADVANCED