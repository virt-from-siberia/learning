$(function () {

    var $items = $('.faq .item');
    var x = 0;
    var items = $('.faq');

    $('.faq').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        },
        // ФУНКЦИЯ ИНИЦИАЛИЗАЦИИ КАРУСЕЛИ
        onInitialized: function () {
            // ЗАПУСК ФУНКЦИИ СРАВНЕНИЯ ВЫСОТЫ ЭЛЕМЕНТОВ
            // ПЕРЕДАЧА ТУДА МАССИВА СО ВСЕМИ ЭЛЕМЕНТАМИ
            equalHeight($items);
        },
        // ФУНКЦИЯ ИЗМЕНЕНИЯ РАЗМЕРА И СРАЗУ ВЫЗОВ
        // ФУНКЦИИ СРАВНЕНИЯ ВЫСОТЫ
        onResized: function () {
            equalHeight($items);
        }
    });

    //ФУНКЦИЯ ЗАПУСКА ВЫРАВНИВАНИЯ ВЫСОТЫ
    function equalHeight() {
        var max = 0;
        //ПЕРЕБОР ЭЛЕМЕНТОВ 
        $items.each(function () {
            var heightOfItem = $(this).find('> div').outerHeight();
            //ЕСЛИ ВЫСОТА ЭЕЛЕМЕНТА БОЛЬШЕ МАХ
            if (heightOfItem > max) {
                //МАХ РАВЕН ВЫСОТЕ ЭЛЕМЕНТА
                max = heightOfItem;
            }
        });
        //ПРИСВОЙТЬ ВСЕМ ЭЛЕМЕНТАМ ЧЕРЕЗ СТИЛЬ CSS 
        //ВЫСОТУ РАВНУЮ МАХ
        $items.css('min-height', max + 'px');
        //ДЕЛАЕМ РЕФРЕШЬ КАРУСЕЛИ 
        setTimeout(function () {
            $('.faq').trigger('refresh.owl.carousel');
        }, 1);
    }
});