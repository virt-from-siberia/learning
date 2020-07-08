// BASIC

function diffArray(arr1, arr2) {

    var newArr = [];

    function onlyInFirst(first, second) {
        for (var i = 0; i < first.length; i++) {


            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
            console.log('newArr = ' + newArr);
        }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));

//INTERMEDIADE

function onlyInFirstINTERMEDIADE(arr1, arr2) {

    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(onlyInFirstINTERMEDIADE([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));


//ADVANCED

function onlyInFirstADVANCED(arr1, arr2) {
    return arr1.filter(el => !arr2.includes(el)).concat(arr2.filter(el => !arr1.includes(el)));
}

console.log(onlyInFirstADVANCED([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));


//ADVANCED 2

function onlyInFirstADVANCEDNext(arr1, arr2) {
    var newArr = [];
    var oldArr = arr1.concat(arr2).sort();
    console.log('old ' + oldArr);


    for (var i = 0; i < oldArr.length; i++) {
        if (oldArr[i] !== oldArr[i + 1] && oldArr[i] !== oldArr[i - 1]) {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}

console.log(onlyInFirstADVANCEDNext([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));