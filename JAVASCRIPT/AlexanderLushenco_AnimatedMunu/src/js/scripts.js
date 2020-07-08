

document.querySelector('.c-hamburger').addEventListener('click', function (evt) {
    evt.preventDefault();

    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.body.classList.remove('body-active');
        document.querySelector('.content-inside').classList.remove('content-show');



    } else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.body.classList.add('body-active');
        document.querySelector('.content-inside').classList.add('content-show');


    }
});