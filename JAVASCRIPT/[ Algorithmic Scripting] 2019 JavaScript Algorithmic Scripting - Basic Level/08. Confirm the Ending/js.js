//CASE BASIC

function confirmEditing(str, target) {

    return str.substr(-target.length) === target;
}
console.log(confirmEditing('Bostain', 'n'));




//CASE INTERMEDIATE
function confirmEditingIntermediae(str, target) {
    if (str.substr(str.length - target.length, str.length) !== target) {
        return false;
    } else {
        return true;
    }
    return str;
}

console.log(confirmEditingIntermediae('he has to give me a new name', 'name'));
//CASE ADVANCED