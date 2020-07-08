
$(document).ready(function(){

    $('.list-item:first').hover(function(){
        $(this).toggleClass('active');
    });

    $('.list-item:eq(1)').on('click', function(){
        $('.image:even').fadeToggle('slow');
    });
    $('.list-item:eq(4)').on('click', function(){
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 100
        );
    });
});