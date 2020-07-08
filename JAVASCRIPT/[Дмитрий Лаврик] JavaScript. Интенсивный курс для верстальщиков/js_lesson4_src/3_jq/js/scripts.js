

$('.question').on('click', function () {
    $('.answer-imem').slideUp();
    $(this).children('.answer-imem').slideToggle('slow');
})