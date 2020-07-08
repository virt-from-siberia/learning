$(document).ready(function () {
    const scrollUP = $('.scrollUP');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollUP.addClass('active');
        }
        if (window.pageYOffset <= 100) {
            scrollUP.removeClass('active');
        }
    });

    scrollUP.click(function (evt) {
        evt.preventDefault();
        $(window).scrollTop(0);
    });
});