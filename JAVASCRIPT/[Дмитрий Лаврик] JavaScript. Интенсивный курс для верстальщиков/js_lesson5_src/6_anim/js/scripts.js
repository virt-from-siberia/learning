$(function () {

    $('.item').on('click', function () {
        $(this).stop(true, true).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
    });

    $('.item').on('contextmenu', function (e) {
        e.preventDefault();

        this.animate(
            {
                height: 100
            },500
        )
      
        // $(this).animate({
        //     height: 100,
        //     opsdity: 0.5
        // },500);
        
    });

});
