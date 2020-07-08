// BASIC
function myReplace(str, before, after) {
    let index = str.indexOf(before);
    console.log(index);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    return str;
}

console.log(myReplace(' A quik brown fox jumped over the lazy dog', 'jumped', 'leoprad'));
//INTERMEDIADE


function myReplaceINTERMEDIADE(str, before, after) {
    let regEx = new regExp(before, "gi");
    if (/[A-Z]/.test(before[0])) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    let newStr = str.replace(re, after);
}
console.log(myReplaceINTERMEDIADE(' A quik brown fox jumped over the lazy dog', 'jumped', 'leoprad'));

//ADVANCED


//ADVANCED 2