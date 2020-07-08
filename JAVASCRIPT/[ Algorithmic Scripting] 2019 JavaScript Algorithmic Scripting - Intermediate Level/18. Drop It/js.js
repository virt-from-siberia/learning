//nNOTE:BASIC

function dropElements(arr, func) {
    let times = arr.length;

    for (let i = 0; i < times; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}
let f = function (n) {
    return n >= 3;
};


console.log(dropElements([1, 2, 3, 4], f));

//NOTE:INTERMEDIADE

function dropElementsINTERMEDIADE(arr, func) {
    return arr.slice(arr.findIndex(f) >= 0 ? arr.findIndex(f) : arr.length, arr.length);
}
console.log(dropElementsINTERMEDIADE([1, 2, 3, 4], f));



//NOTE:ADVANCED

function dropElementsADVANCED(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}
console.log(dropElementsADVANCED([1, 2, 3, 4], f));
///NOTE:ADVANCED 2