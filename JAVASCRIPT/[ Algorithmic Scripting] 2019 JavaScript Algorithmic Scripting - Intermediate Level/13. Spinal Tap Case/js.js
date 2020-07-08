//nNOTE:BASIC


function spinalCase(str) {
    let regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));



//NOTE:INTERMEDIADE

function spinalCaseINTERMEDIADE(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.toLowerCase().split(/(?:_|) +/).join('-');
}

console.log(spinalCaseINTERMEDIADE('This Is Spinal Tap'));
//NOTE:ADVANCED


///NOTE:ADVANCED 2