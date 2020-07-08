//CASE BASIC

function getIndexToIns(arr, num) {
    // console.log(arr);
    arr.sort(function (a, b) {
        return a - b;
    });

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num) {
            return a;
        }
    }
    return arr.length;
}


console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([40, 60], 500));

//CASE INTERMEDIATE

function getIndexToInsINTERMEDIATE(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });

    var i = 0;
    while (num > arr[i]) {
        i++;
    }
    return i;
}
console.log(getIndexToInsINTERMEDIATE([1, 2, 3, 4], 1.5));
console.log(getIndexToInsINTERMEDIATE([20, 3, 5], 19));
console.log(getIndexToInsINTERMEDIATE([40, 60], 50));
console.log(getIndexToInsINTERMEDIATE([40, 60], 500));

//CASE ADVANCED