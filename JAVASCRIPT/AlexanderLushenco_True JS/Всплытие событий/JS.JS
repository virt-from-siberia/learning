function myClick() {
    console.log('click');
}


document.querySelector('.one').onclick = myClick;
document.querySelector('body').onclick = myClick;