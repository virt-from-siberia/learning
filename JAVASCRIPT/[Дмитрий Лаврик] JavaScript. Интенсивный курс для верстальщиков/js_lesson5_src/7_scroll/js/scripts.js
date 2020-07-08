$(function () {

    $('.menu').css('position: fixed');

    
    
    $('.menu a').on('click', function (e) {
        e.preventDefault();

        $('.menu a').removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href');
        // alert(selector);
        var h = $(selector);
        $('html , body').animate({
            scrollTop :  h.offset().top
        }, 1000);
    });
});