let one = document.querySelector('.one');
let two = document.querySelector('.two');
let arrElements = [one, two];

function changeDiv(div) {
    div.innerHTML += ' hello';
}


arrElements.forEach(function (el) {

    setTimeout(function () {
        changeDiv(el);
    }, 3000);
});


// setTimeout(function () {
//     changeDiv(one);
// }, 3000);

// setTimeout(function () {
//     changeDiv(two);
// }, 3000);