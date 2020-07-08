//nNOTE:BASIC

function convertHTML(str) {
    let temp = str.split('');

    for (let i = 0; i < temp.length; i++) {
        switch (temp[i]) {
            case '<':
                temp[i] = '&lt;';
                break;
            case '&':
                temp[i] = '&amp;';
                break;
            case '>':
                temp[i] = '&glt;';
                break;
            case '"':
                temp[i] = '&quot;';
                break;
            case "'":
                temp[i] = '&apos;';
                break;
        }
    }
    temp = temp.join('');
    document.querySelector('.out').innerHTML = temp;
    return temp;
}


console.log(convertHTML('"Dolce & Gabanna"'));

//NOTE:INTERMEDIADE


function convertHTMLINTERMEDIADE(str) {
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    return str;
}

console.log(convertHTMLINTERMEDIADE('"Dolce & Gabanna"'));

//NOTE:ADVANCED

function convertADVANCED(str) {
    let htmlEntites = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        "\'": '&apos;'
    };
    return str.split('').map(function (entity) {
        return htmlEntites[entity] || entity;
    }).join('');
}
console.log(convertADVANCED('"Dolce & Gabanna"'));

///NOTE:ADVANCED 2