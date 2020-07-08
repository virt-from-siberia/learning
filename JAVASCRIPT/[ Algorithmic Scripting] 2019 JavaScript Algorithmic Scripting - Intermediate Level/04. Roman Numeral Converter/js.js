// BASIC

var convertRoman = function (num) {
    var desimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var romanized = '';

    for (var index = 0; index < desimalValue.length; index++) {
        while (desimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= desimalValue[index];
        }
    }
    return romanized;
};
console.log(convertRoman(4));
console.log(convertRoman(36));
console.log(convertRoman(97));

//INTERMEDIADE


function convertRomanINTERMEDIADE(num) {

}

//ADVANCED



//ADVANCED 2