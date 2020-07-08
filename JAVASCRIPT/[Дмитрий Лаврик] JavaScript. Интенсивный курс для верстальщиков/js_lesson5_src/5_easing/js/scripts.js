$(function(){
    
    $('.faq .ask').on('click', function(){
        $(this).next().slideToggle({
            duration: 1000,
            easing: $.bez([.51,1.92,.43,-0.98])
        });
    });
    
});
