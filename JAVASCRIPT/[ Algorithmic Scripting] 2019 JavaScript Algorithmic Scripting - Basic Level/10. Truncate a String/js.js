//CASE BASIC

function turncateSring(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

console.log(turncateSring('Orange', 1));
console.log(turncateSring('Orange', 3));
console.log(turncateSring('Orange', 9));


//CASE INTERMEDIATE
function turncateSringINTERMEDIATE(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
    }
}
console.log(turncateSringINTERMEDIATE('Orange', 1));
console.log(turncateSringINTERMEDIATE('Orange', 3));
console.log(turncateSringINTERMEDIATE('Orange', 9));
console.log(turncateSringINTERMEDIATE('Orange', 7));

//CASE ADVANCED