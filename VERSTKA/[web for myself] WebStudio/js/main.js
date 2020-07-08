window.onload = function () {
    const hamburer = document.querySelector('.hamburger');
    hamburer.addEventListener('click', (evt) => {
        evt.target.closest('.hamburger').classList.toggle('hamburger--active');
        evt.target.closest('.menu').querySelector('.menu__list').classList.toggle('menu__list--active');
    });
};