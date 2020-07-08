//nNOTE:BASIC

function findElement(arr, func) {
    let num;

    for (let a = 0; a < arr.length; a++) {
        if (func(arr[a])) {
            num = arr[a];
            return num;
        }
    }
    return num;
}
let f = function (num) {
    return num % 2 === 0;
};

console.log(findElement([1, 2, 3, 4], f));

//NOTE:INTERMEDIADE

function findElementINTERMEDIADE(arr, func) {
    let filterArr = arr.filter(func);

    return filterArr[0];
}
//NOTE:ADVANCED

console.log(findElementINTERMEDIADE([1, 2, 3, 4, 2], f));
///NOTE:ADVANCED 2