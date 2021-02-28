$(function(){
    
    $('.faq .answer:first').show();
    
    $('.faq .ask').on('click', function(){
        var answer = $(this).next();
        
        $('.faq .answer:visible').not(answer).slideUp(400);
        answer.slideDown(400);
    });
    
});
