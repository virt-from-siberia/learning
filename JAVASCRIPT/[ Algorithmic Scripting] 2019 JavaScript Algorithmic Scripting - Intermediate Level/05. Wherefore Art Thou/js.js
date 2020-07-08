// BASIC

function whatIsInAName(collection, source) {
    console.log(source);
    var srcKeys = Object.keys(source);
    console.log(srcKeys);
    return collection.filter(function (obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

console.log(whatIsInAName(
    [
        { first: "romeo", last: "montage" },
        { first: "romeo", last: null },
        { first: 'tybalt', last: "capulet" }],
    { last: 'capulet' }

));

//INTERMEDIADE
console.log('=====================');
function whatIsInANameINTERMEDIADE(collection, source) {
    var srcKeys = Object.keys(source);
    return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

console.log(whatIsInANameINTERMEDIADE(
    [
        { first: "romeo", last: "montage" },
        { first: "romeo", last: null },
        { first: 'tybalt', last: "capulet" }],
    { last: 'capulet' }

));

//ADVANCED

console.log('=====================');
function whatIsInANameADVANCED(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function (obj) {
        return srcKeys.map(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        }).reduce(function (a, b) {
            return a && b;
        });
    });
}


console.log(whatIsInANameADVANCED(
    [
        { first: "romeo", last: "montage" },
        { first: "romeo", last: null },
        { first: 'tybalt', last: "capulet" }],
    { last: 'capulet' }

));

//ADVANCED 2