//CASE BASIC

function repeatStringNumTimes(str, num) {
    if (num > 0) {
        return str.repeat(num);
    }
    return "";
}

console.log(repeatStringNumTimes('candy apple ', 1));
console.log(repeatStringNumTimes('candy apple ', 4));
//CASE INTERMEDIATE

function repeatStringNumTimesINTERMEDIATE(str, num) {
    if (num < 0) {
        return '';
    }
    if (num === 1) {
        return str;
    } else {
        console.log('callback ' + num);
        return str + repeatStringNumTimesINTERMEDIATE(str, num - 1);

    }
}

console.log(repeatStringNumTimesINTERMEDIATE('candy apple ', 1));
console.log(repeatStringNumTimesINTERMEDIATE('candy apple ', 4));

//CASE ADVANCED

function repeatStringNumTimesADVANCED(str, num) {
    return num > 0 ? str.repeat(num) : '';
}
console.log(repeatStringNumTimesADVANCED('candy apple ', 1));
console.log(repeatStringNumTimesADVANCED('candy apple ', 6));