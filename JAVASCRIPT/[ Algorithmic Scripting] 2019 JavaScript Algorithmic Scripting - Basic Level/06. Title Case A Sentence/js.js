//CASE BASIC

String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.lengh);
};

function titleCase(str) {
    let newTitle = str.split(' ');
    let updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0));
    }
    return updatedTitle.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

//CASE INTERMEDIATE

function IntermediateTite(str) {
    let convertToArray = str.toLowerCase().split(' ');

    console.log(convertToArray);

    let resault = convertToArray.map(function (val) {

        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return resault.join(' ');
}

console.log(IntermediateTite("I'm a little tea pot"));


//CASE ADVANCED

function advancedTite(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

console.log(advancedTite("I'm a little tea pot"));


//CASE ADVANCED 2
function advancedTWOTite(str) {
    str = str.split(' ');

    for (var i = 0; i < str.length; i++) {

        str[i] = str[i].toLowerCase().split('');
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }
    return str.join(' ');
}
console.log(advancedTWOTite("I'm a little tea pot"));