$(function () {

    let $form = $('.app');
    let $res = $('.result');
    let $errors = $('.error');
    let $loading = $('.loading');
    let isRun = false;

    $('.send').on('click', function () {
        if (isRun) {
            return;
        }

        isRun = true;
        $loading.fadeIn(100);
        $res.empty();

        $.post('app.php', $form.serialize(), function (data) {
            if (data.res) {
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            }
            else {
                $errors.empty();

                for (let name in data.errors) {
                    let target = $('[name=' + name + ']');

                    if (target.length > 0) {
                        target.next().html(data.errors[name]);
                    }
                }
            }
        }, 'json')
            .always(function () {
                $loading.hide();
                isRun = false;
            })
            .fail(function () {
                $res.html('Сервер лёг!');
            });

    });

});