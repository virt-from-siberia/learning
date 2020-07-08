
let out = document.querySelector('#out');

let temp = '';


//Цикл с заданным количеством повторений FOR
for (let i = 5; i < 15; i++) {
    if (i == 10) continue;
    console.log(i);
    if (i == 12) break;
}

let x = 0;
while (x < 8) {
    x++;
    console.log("cicle " + x);
}


let a = ['qwe', 23423, 'asda', , 'asdasd', 44, 453453];

let str = '';
for (let arr = 0; arr < a.length; arr++) {
    if (a[arr] != undefined) {
        str += a[arr] + '<br/>';
    } else {
        console.log('undefined');
        continue;
    }

}
out.innerHTML = str;


console.log('=======================');

let mass = [3, 5];
console.log(mass);

mass.push(2);
console.log(mass);


mass.pop();
console.log(mass);


let e = "hi, my , mani,    is , Ivan";
let f = e.split(',');

console.log(f);
console.log(f.join(''));

let j = e.slice(1, 2);
console.log(j);


let arrray = [2, 7, 32, 324, 234, 234, 2];
let [a2, b2, c2, d2, e2, f2, j2, i2] = arrray;
let [newArr] = arrray;

console.log('=======================');

console.log(a2, d2);
console.log(newArr);



