


window.onload = function () {
    console.log('lol');

    let btnToCART = document.querySelectorAll('.productItem__btn');

    for (let i = 0; i < btnToCART.length; i++) {
        btnToCART[i].addEventListener('click', passToCart);
    }


    function passToCart() {
        let btn = this;
        console.log(btn);

        btn.classList.remove('productItem__btn');
        btn.classList.add('productItem__btn-loading');

        setTimeout(function () {
            btn.classList.remove('productItem__btn-loading');
            btn.classList.add('productItem__btn-done');
            btn.innerHTML = 'Добавленно';
        }, 1000);
    }
}





