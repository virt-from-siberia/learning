function reverseString(str) {
    console.log(str);
    str = str.split('');
    console.log(str);
    str = str.reverse('');
    console.log(str);
    str = str.join('');

    return str;
}

console.log(reverseString("hello"));
console.log(reverseString("howdy"));
console.log(reverseString("greething from earth"));

console.log('INTERMEDIATE=============');

function reverseStringIntermediate(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}


console.log(reverseStringIntermediate("hello"));
console.log(reverseStringIntermediate("howdy"));
console.log(reverseStringIntermediate("greething from earth"));

console.log('ADVANCED=============');

function reverseStringAdvanced(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStringAdvanced("hello"));
console.log(reverseStringAdvanced("howdy"));
console.log(reverseStringAdvanced("greething from earth"));