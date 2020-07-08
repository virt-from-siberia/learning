
console.log('=============== LET ===============');
// 📁 let.js

var buttons = document.querySelectorAll('button');


buttons.forEach(function (el, iterator = 0) {
    var button = el.style.fontSize = '24px';
    el.innerHTML = iterator;
    el.onclick = function () {
        console.log(iterator - 1);
    }
    iterator++;

});




////// ОПЕРАТОР ОАЗВОРОТА SPREAD OPERATOR