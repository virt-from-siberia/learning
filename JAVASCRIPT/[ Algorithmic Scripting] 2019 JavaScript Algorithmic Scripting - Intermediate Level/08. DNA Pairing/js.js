// BASIC

function pairElement(str) {

    let paired = [];
    let search = function (char) {
        console.log(char);
        switch (char) {
            case 'A':
                paired.push(['A', 'T']);
                break;
            case 'T':
                paired.push(['T', 'A']);
                break;
            case 'C':
                paired.push(['C', 'G']);
                break;
            case 'G':
                paired.push(['G', 'C']);
                break;
        }
    };
    for (let i = 0; i < str.length; i++) {
        search(str[i]);
    }
    return paired;
}

console.log(pairElement('CGC'));
//INTERMEDIADE



//ADVANCED


//ADVANCED 2