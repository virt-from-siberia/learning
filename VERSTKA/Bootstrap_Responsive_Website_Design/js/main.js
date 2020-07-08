$(document).ready(function () {

    $(this).scroll(function () {

        $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
    });

});