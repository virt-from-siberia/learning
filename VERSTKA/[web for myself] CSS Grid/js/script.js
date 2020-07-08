$(document).ready(function () {
    $('.works__btns button, .works__btns a').on('focus', function () {
        $(this).parents('.works__element').addClass('works__element--active');
    });

    $('.works__btns button, .works__btns a').on('blur', function () {
        $(this).parents('.works__element').removeClass('works__element--active');
    });


    function moveProggress(node, nodeLine, tooltip, animationLength = 1500) {
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent + '%'
            }, animationLength);
            $(tooltip).css('display', 'block');
            $(item).find(tooltip).show(animationLength);
        });
    }

    let animate = true;

    $(window).scroll(function () {

        if (($('.skills').offset().top) - 500 <= $(window).scrollTop()) {
            if (animate) {
                moveProggress('.progress__element', '.progress__line', 'progress__tooltip');
            }
            animate = false;
        }
    });


    $('.carousrl').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [],
        items: 5,
        smartSpeed: 500,
        autoplayTimeout: 1500,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            980: {
                items: 5
            }
        }
    });



});