let box = document.getElementById('box');
btn = document.getElementsByTagName('button'),
    cirecle = document.getElementsByClassName('cirecle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

    console.log(wrapper);
// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.table(btn);
// console.log(cirecle[2]);
// console.log(heart);
// console.log(heart[1]);
// console.log(oneHeart);

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';
cirecle[0].style.backgroundColor = 'red';
cirecle[1].style.backgroundColor = 'yellow';
cirecle[2].style.backgroundColor = 'blue';

// for (let i = 0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'grey';
// }

heart.forEach(function (item, i, heartArray) {
    item.style.border = '3px dashed black';
});

let div = document.createElement('div'),
    text = document.createTextNode('Тут бы я');
div.classList.add('black');


// div.innerHTML = '<h3>Hello World</h3>';
div.textContent = 'Hello World';


// document.body.appendChild(div);
wrapper.appendChild(div);
document.body.insertBefore(div, cirecle[0]);
document.body.removeChild(cirecle[1]);

document.body.replaceChild(btn[1], cirecle[1]);

console.log(div);