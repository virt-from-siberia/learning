$(document).ready(function () {

    $('.header__burger').on('click', function (evt) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});