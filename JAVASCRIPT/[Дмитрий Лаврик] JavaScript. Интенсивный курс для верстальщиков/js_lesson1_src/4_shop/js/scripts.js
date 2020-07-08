window.onload = function (e) {

    var items = document.querySelectorAll('.items .item');
    var divPrice = document.querySelector('.value');


    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            this.classList.toggle('item-active');
            calcPrice();
        }
    }

    function calcPrice() {
        var price = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains('item-active')) {
                price += parseInt(items[i].getAttribute('data-price'));
            }
        }

        divPrice.innerHTML = price;
    }

}