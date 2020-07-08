
let p = document.getElementsByTagName('p');
console.log(p);


p[0].style.color = 'yellow';
p[0].style.background = 'black';

let temp = [
    [-4, 0, 3],
    30,
    [12, 5, 21],
    [-28, 12, 56],
    30,
    28
];


for (let k = 0; k < temp.length; k++) {
    if (Array.isArray(temp[k])) {
        let ca = 0;
        for (let l = 0; l < temp[k].length; l++) {
            console.log(temp[k][l]);
        }
        console.log('========' + '<br/>');
    } else {
        console.log('variable is not array');
    }
}

