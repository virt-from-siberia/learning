$(function () {

    $('.faq_ask').on('click', function () {
        $(this).next().slideToggle(500);
    });

    let form = $('.form');

    $('.form').on('submit', function (evt) {
        evt.preventDefault();

        let formData = form.serialize();

        console.log(formData);

        $.post('lol/php', formData, function (data) {

            }, 'json').done(function () {
                alert("second success");
            })
            .fail(function () {
                alert("error");
            })
            .always(function () {
                alert("finished");
            });
    });

});