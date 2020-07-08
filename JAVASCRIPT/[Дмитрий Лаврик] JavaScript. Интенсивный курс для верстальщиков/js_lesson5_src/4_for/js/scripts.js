$(function(){
     
    $('.faq .ask').on('click', function(){
        var id = $(this).attr('data-open');
        
        $('.faq .answer[data-id=' + id + ']').slideToggle(400);

    });
    
});
