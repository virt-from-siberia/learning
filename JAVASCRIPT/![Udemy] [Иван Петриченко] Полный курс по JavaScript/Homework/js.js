$(document).ready(function () {


    $('.main_btn').on('click', function () {
        fadeInOverlay();
        slideDownModal();
    });

    $('.main_btna').on('click', function () {
        fadeInOverlay();
        slideDownModal();
    });

    $('.close').on('click', function(){
        closeModal();
    })


    function fadeInOverlay() {
        $('.overlay').fadeIn(500);
    }

    function slideDownModal(){
        $('.modal').slideDown(1000);
    }

    function closeModal(){
        $('.modal').fadeOut();
        $('.overlay').fadeOut(1500);
    };



    

});