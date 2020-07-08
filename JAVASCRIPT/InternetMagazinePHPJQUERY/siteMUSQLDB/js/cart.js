var cart = {};


function loadCart() {
    //ЗАГРУЖАЮ  КОРЗИНУ ИЗ LOCALSORAGE
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    }
    else {
        $('.main-cart').html('Корзина пуста');
    }
}

function showCart() {
    //ВЫВОД КОРЗИНЫ
    if (!isEmpty(cart)) {
        $('.main-cart').html('Корзина пуста');
    }
    else {
        $.getJSON('goods.JSON', function (data) {
            var goods = data;
            var out = '';
            var price = 0;
            var commonSum = 0;
            for (var id in cart) {
                out += `<button data-id="${id}" class="del-goods">X</button> `;
                out += `<button data-id="${id}" class="plus-goods">+</button> `;
                out += `<button data-id="${id}" class="minus-goods">-</button> `;
                out += `<img src="images/${goods[id].img}"> `;
                out += ` ${goods[id].name} `;
                out += `Количество - ${cart[id]} `;
                var price = goods[id].cost * cart[id];
                out += `Цена - ${price} <br>`;
                commonSum = commonSum + price;
            }
            out += `Стоимость всего - ${commonSum} <br>`;

            $('.main-cart').html(out);
            $('.del-goods').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
            $('.minus-goods').on('click', minusGoods);
        });
    }
}

function delGoods() {
    //удоляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    showCart();
    saveCart();

}

function plusGoods() {
    //ДОБОВЛЯЕТ КОЛИЧЕСТВО
    var id = $(this).attr('data-id');
    cart[id]++;
    showCart();
    saveCart();
}

function minusGoods() {
    //УМЕНЬШАЕТ КОЛИЧЕСТВО
    var id = $(this).attr('data-id');
    if (cart[id] == 0) {
        delete cart[id];
        showCart();
        saveCart();
    } else {
        cart[id]--;
        showCart();
        saveCart();
    }
}



function saveCart() {
    //СОХРАНЯЮ КОРЗИНУ  В LOCALSTORAGE
    localStorage.setItem('cart', JSON.stringify(cart))// КОРЗИНУ В СТРОКУ;
}
function isEmpty(object) {
    //ПРОВЕРКА КОРЗИНЫ НА ПУСТАТУ
    for (var key in object) {
        if (object.hasOwnProperty(key)) return true;
        return false;
    }
}


function getime() {
    var currentdate = new Date();
    var datetime = "Дата заказа :" + currentdate.getDate() + "."
        + (currentdate.getMonth() + 1) + "."
        + currentdate.getFullYear() + " Время заказа :"
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    return datetime;
}



function sendEmail() {
    var ename = $('#ename').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    if (ename != '' && email != '' && phone != '') {
        //ПРОВЕРЯЮ ПУСТА ЛИ КОРЗИНА
        if (isEmpty(cart)) {
            //ЕСЛИ КОРЗИНА НЕ ПУСТА 
            //ПОЛУЧАЮ ВРЕМЯ И ДАТУ ЗАКАЗА
            var datetime = '';
            datetime = getime();
            //ОТПРАВЛЯЮ ЗАПРОС НА СЕРВЕР
            $.post("core/mail.php",
                {
                    "ename": ename,
                    "email": email,
                    "phone": phone,
                    "cart": cart,
                    "datetime": datetime
                    //В СЛУЧАЙ УСПЕШНОЙ ОТПРАВКИ 
                    //ВЫПОЛНИТСЯ ФУНКЦИЯ ОБРАБОТЧИК
                    //DATA - ОТВЕТ СЕРВЕРА
                }, function (data) {
                    if ((data == 1)) {
                        alert('Заказ отправлен');
                    } else {
                        alert('Повторите зхаказ');

                    }
                }

            );
        } else {
            alert('Корзина пуста');
        }

    } else {
        alert('Заполните поля');
    }
}

$(document).ready(function () {
    loadCart();
    $('.send-email').on('click', sendEmail); //ОТПРАВИТЬ ПИСЬМО С ЗАКАЗОМ
});