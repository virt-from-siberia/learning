$(function () {

    // $('.items').on('focus', 'input[type="text"]', function(){
    //     $(this).addClass('active'); 
    // });

    // $('.items').on('blur', 'input[type="text"]', function(){
    //    $(this).removeClass('active'); 
    // });

    // $('.addField').on('click', function(){
    //    var $div = $('<div/>').addClass('item');
    //    $('<input>').attr('type', 'text').addClass('check').appendTo($div); 
    //    $('.items').append($div);
    // });

    $('items').on('focus', 'input[type="text"]', function () {
        $(this).addClass('active');
    });
    $('items').on('blur', 'input[type="text"]', function () {
        $(this).removeClass('active');
    });


    // $('.addField').on('click', function () {
    //     var $div = $('</div>').addClass('.item');
    //     $('<input>').attr('type', 'text').addClass('check').appendTo($div);
    //     $('.items').append($div);
    // })


    $('.addField').on('click', function () {

        // var items = document.querySelectorAll('.item');

        $items = $('.item');

        console.log($items);
        if ($items.length > 10) {
            alert('stop');
        } else {
            var $div = $('<div/>').addClass('item');
            $('<input>').attr('type', 'text').addClass('check').appendTo($div);
            $('.items').append($div);
        }
    });

});