$('document').ready(function () {

    

    let valueN1 = 0;
    let valueN2 = 0;

    let val1 = $('.input-1').on('change', function(){
        valueN1 = +($('.input-1').val());
    });
    let val2 = $('.input-2').on('change', function(){
        valueN2 = +($('.input-2').val());
    });

    let out = 0;

    let showResault = $('.showResault');

    // showResault.innerHTML = '123';


    $('.showResault').html(out);




    $('.plus').on('click', function () {
        out = valueN1 + valueN2;
        $('.showResault').html(out);
    })
    $('.minus').on('click', function () {
        out = valueN1 - valueN2;
        $('.showResault').html(out);
    })
    $('.multiplay').on('click', function () {
        out = valueN1 * valueN2;
        $('.showResault').html(out);
    })
    $('.divede').on('click', function () {
        out = valueN1 / valueN2;
        $('.showResault').html(out);
    });
});