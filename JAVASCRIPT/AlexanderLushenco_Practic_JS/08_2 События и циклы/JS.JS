let blocks = document.querySelectorAll('.block');


console.log(document.querySelectorAll('.block'));


blocks.forEach(function (el) {
    el.onclick = () => console.log('work work');

});