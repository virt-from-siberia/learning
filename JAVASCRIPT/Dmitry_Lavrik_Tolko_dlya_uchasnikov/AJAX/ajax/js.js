function show(data) {
    $('.answer').html(data);
    if (data.errors.email) {
        $('.error-email').html(data.errors.email);
    }
    if (data.errors.name) {
        $('.error-name').html(data.errors.name);
    }
    if (data.errors.phone) {
        $('.error-phone').html(data.errors.phone);
    }
}

function clear() {
    $('.answer').html('');
    $('.error-email').html('');
    $('.error-name').html('');
    $('.error-phone').html('');
}

$(function () {

    let $form = $('.app');

    $('.send').on('click', function () {

        clear();

        $('.answer').addClass('go_loading');
        $('.send').attr("disabled", true);

        $.post('app.php', $form.serialize(), function (data) {

            if (data.res == true) {
                $('.answer').removeClass('go_loading');
                show('Вы успешно зарегестрировались!');
                $('.send').attr("disabled", false);
                $form.slideUp(1300);
            } else {
                $('.answer').removeClass('go_loading');
                $('.send').attr("disabled", false);
                show(data);
            }
        }, 'json');
    });
});

