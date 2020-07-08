//CASE BASIC

function mutation(arr) {

    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();

    for (var i = 0; i < test.length; i++) {
        console.log(target);
        if (target.indexOf(test[i]) === -1) {
            return false;
        }
        return true;
    }
}

console.log(mutation(["hello", "hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["alien", "line"]));

//CASE INTERMEDIATE

function mutationINTERMEDIATE(arr) {
    return arr[1].toLowerCase().split('').every(function (letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

console.log(mutationINTERMEDIATE(["hello", "hello"]));
console.log(mutationINTERMEDIATE(["hello", "hey"]));
console.log(mutationINTERMEDIATE(["alien", "line"]));
//CASE ADVANCED