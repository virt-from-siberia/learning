//CASE BASIC

function rot13(str) {
    return str.split(' ').map.call(str, function (char) {
        x = char.charCodeAt(0);

        if (x < 65 || x > 90) {
            return String.fromCharCode(x);
        } else if (x < 78) {
            return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13);
    }).join('');
}

console.log(rot13('LBH QVQ VG!'));

//CASE INTERMEDIATE

function rot13INTERMEDIATE(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split('');
    for (var x in str) {
        // console.log(x);
        // console.log(regEx);
        if (regEx.test(str[x])) {
            rotCharArray.push((str[x]).charCodeAt(-65 + 13));
        }
    }
}

console.log(rot13INTERMEDIATE('LBH QVQ VG!'));
//CASE ADVANCED