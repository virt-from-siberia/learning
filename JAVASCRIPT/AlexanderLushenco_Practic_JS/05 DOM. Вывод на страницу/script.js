document.querySelector('p').innerHTML += '  Пример <span>Hi</span>';
// document.querySelector('p').innerHTML += '  Пример <span>Hi</span>';

let h1 = document.querySelector('h1');
console.log(h1);


setTimeout(function change() {
    h1.outerHTML = 'LLL';
}, 1000);



document.querySelector('div').insertAdjacentHTML('beforebegin', 222222);
document.querySelector('.One span').innerHTML = 'new span';
document.querySelector('img').alt = 'lol';
document.querySelector('title').innerText = 'v1rt';
document.querySelector('input').value = 'АУЕ';
document.querySelector('input').type = 'range';