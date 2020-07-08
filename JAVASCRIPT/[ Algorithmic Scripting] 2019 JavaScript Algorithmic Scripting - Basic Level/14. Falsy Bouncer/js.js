//CASE BASIC

var falsyArr = [0, 1, 2, 3, null, 5, "", 7, 8, undefined, 10, NaN, 12, 13, false];



function bouncer(arr) {

    var MinusArr = arr.filter(function (number) {
        return typeof (number) !== 'number';
    });
    console.log(MinusArr);

    var positiveArr = arr.filter(function (number) {
        return typeof (number) === 'number' && !isNaN(number);
    });
    return positiveArr;

}

console.log(bouncer(falsyArr));
//CASE INTERMEDIATE


//CASE ADVANCED