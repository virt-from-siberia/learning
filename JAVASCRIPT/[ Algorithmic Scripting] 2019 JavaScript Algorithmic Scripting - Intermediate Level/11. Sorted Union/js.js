//nNOTE:BASIC

function uniteUnique(arr1, arr2, arr3) {
    let finalArray = [];

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments.length);
        let arrayArguments = arguments[i];
        console.log(arrayArguments);

        for (let j = 0; j < arrayArguments.length; j++) {
            let indexValue = arrayArguments[j];
            console.log('indexValue ' + indexValue);

            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }
    return finalArray;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1]));
//NOTE:INTERMEDIADE

function uniteUniqueINTERMEDIADE(arr1, arr2, arr3) {
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
    let newArr;
    let args = Array.prototype.slice.call(arguments);
    console.log(args);

    newArr = args.reduce(function (arrA, arrB) {
        return arrA.concat(arrB.filter(function (i) {
            return arrA.indexOf(i) === -1;
        }));
    });
    return newArr;
}

console.log(uniteUniqueINTERMEDIADE([1, 2, 3], [5, 2, 1, 4], [2, 1]));
//NOTE:ADVANCED


///NOTE:ADVANCED 2