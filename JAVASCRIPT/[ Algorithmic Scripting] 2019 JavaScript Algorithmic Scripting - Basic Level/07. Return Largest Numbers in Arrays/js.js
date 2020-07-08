//CASE BASIC

var numArr = [
    [544, 2342, 23, 234],
    [34, 2342, 13, 64],
    [46, 999, 44, 33],
    [85, 4564, 344, 38]
];

function largestOfFour(arr) {

    let resault = [];
    for (let n = 0; n < arr.length; n++) {
        console.log(arr[n][0]);
        var largestNumber = arr[n][0];

        for (let y = 1; y < arr[n].length; y++) {
            console.log(arr[n][y]);
            if (arr[n][y] > largestNumber) {
                largestNumber = arr[n][y];
            }
        }
        resault[n] = largestNumber;
        console.log('resaults = ' + resault[n]);
    }
    return {
        "resault": resault,
        "largestNumber": largestNumber
    }
}
console.log(largestOfFour(numArr));


//CASE INTERMEDIATE
console.log('//CASE INTERMEDIATE');

function largestOfFourIntermediate(arr) {

    console.log(arr);

    return arr.map(function (gropu) {

        console.log(gropu);

        return gropu.reduce(function (prev, current) {

            console.log(prev);
            console.log(current);

            return (current > prev) ? current : prev;
        });
    });
}
console.log(largestOfFourIntermediate(numArr));



//CASE ADVANCED
console.log('//CASE ADVANCED');
function largestOfFourAdvanced(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestOfFourAdvanced(numArr));