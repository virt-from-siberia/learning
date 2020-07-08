$(document).ready(function () {

    $('.textb input').on('focus', function () {
        $(this).addClass('focus');
    });

    $('.textb input').on('blur', function () {
        if ($(this).val() == "")
            $(this).removeClass('focus');
    });

    $('.textb input').on('change', function () {
        if ($(this).val() !== '') {
            $(this).addClass('check');
        } else {
            $(this).removeClass('check');
        }

    });
});