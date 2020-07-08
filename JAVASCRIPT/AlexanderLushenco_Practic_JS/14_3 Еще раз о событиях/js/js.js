let one = document.querySelector('.one');

console.log(one);

function myClick() {
    console.log('click');
}

one.onclick = myClick;