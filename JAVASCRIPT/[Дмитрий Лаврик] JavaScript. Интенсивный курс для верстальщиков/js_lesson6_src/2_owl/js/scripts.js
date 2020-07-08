$(function () {

    $('.faq').owlCarousel({
        loop: true,
        nav : true,
        pagination: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 1000,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    })
});