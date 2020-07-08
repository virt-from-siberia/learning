
var cart = {} // КОРЗИНА


function init() {
    //ВЫВОД ТОВАРА НА ГЛАВНУЮ СТРАНИЦУ
    $.getJSON("goods.JSON", goodsOut);
}

function goodsOut(data) {
    //ВЫВОД НА СТРАНИЦУ
    // var goods = JSON.parse(data);
    console.log(data);
    var out = "";
    for (var key in data) {
        out += '<div class="cart">';
        out += '<p class="name">' + data[key].name + '</p>';
        out += '<img src="images/' + data[key].img + '" alt="">';
        out += '<div class="cost">' + data[key].cost + '</div>';
        out += '<button class="add-to-cart" data-article="' + key + '">Купить</button>';
        out += '</div>';
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function addToCart() {
    // ДОБОВЛЯЕМ ТОВАР В КОРЗИНУ
    var id = $(this).attr('data-article');
    // console.log(id);

    if (cart[id] == undefined) {
        cart[id] = 1;
    } else {
        cart[id]++;
    }
    shoewMiniCart();
    saveCart();
}

function saveCart() {
    //СОХРАНЯЮ КОРЗИНУ  В LOCALSTORAGE
    localStorage.setItem('cart', JSON.stringify(cart))// КОРЗИНУ В СТРОКУ;
}

function shoewMiniCart() {
    //ПОКАЗЫВАТЬ МИНИ КОРЗИНУ
    var out = "";
    for (var key in cart) {
        console.log(key);
        out += key + '-----' + cart[key] + '<br>';

    }
    $('.mini-cart').html(out);
}

function loadCart() {
    //ЗАГРУЖАЮ  КОРЗИНУ ИЗ LOCALSORAGE
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        shoewMiniCart();
    }

}

$(document).ready(function () {
    init();
    loadCart();
});

