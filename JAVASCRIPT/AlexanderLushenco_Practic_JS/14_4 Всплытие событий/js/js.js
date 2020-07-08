function myClick(evt) {
    console.log('=====================');
    console.log(evt.target);
    console.log(this);
}



// document.querySelector('.one').onclick = myClick;
// document.querySelector('body').onclick = myClick;
// document.querySelector('html').onclick = myClick;

document.onclick = function (evt) {
    // console.log(evt.target);
    if (evt.target.classList.contains('one')) {
        console.log('one');
    }
}

document.querySelector('.two').onclick = function (evt) {
    evt.stopPropagation();
    console.log('clck !!!!!!!!!!');
}
document.querySelector('.three').onclick = function () {
    this.style.display = 'none';
}