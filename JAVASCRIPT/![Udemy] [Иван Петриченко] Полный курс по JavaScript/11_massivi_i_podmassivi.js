let arr = ["first", "second", 1, 2, 3, "four", 4];

console.log(arr);

arr.pop();
arr.push("5");

console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("1");
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (item, i, mass) {
    console.log("function for each = " + i + ': ' + item + " (массив : " + mass + ')');
});


let mass = [1, 2, 234, 234, 22];

for (let key of mass) {
    console.log(key);
}




let ans = prompt("", ""),
    arrOfAnsw = [];

// arrOfAnsw = ans.split(', ');
// console.log(arrOfAnsw);



let newArr = ["aa", "asdas", "zzz", "ppp"],
    i = newArr.join(', ');
console.log(i);
let s = i.split(', ');
console.log(s);


let sortI = newArr.sort();

console.log(sortI);


//СОРТИРОВКА ЦИФР

let numArr = [1, 15, 6 , 25];
let sort = numArr.sort(compare);

function compare(a, b){
    return b-a;
};
console.log(sort);
