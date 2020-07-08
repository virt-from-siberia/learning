// BASIC
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        console.log(code);
        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

console.log(fearNotLetter('abcf'));

//INTERMEDIADE

function fearNotLetterINTERMEDIADE(str) {
    let compare = str.charCodeAt(0),
        missing;
    str.split('').map(function (letter, index) {
        if (str.charCodeAt(index) === compare) {
            ++compare
        } else {
            missing = String.fromCharCode(compare);
        }

    });
    return missing;
}
console.log(fearNotLetterINTERMEDIADE('abce'));
//ADVANCED


//ADVANCED 2