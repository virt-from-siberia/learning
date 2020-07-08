// FUNCTIONS STAG

'use strickt';

function check() {
    if (this.checked) {
        this.nextElementSibling.classList.add('checked');
    } else {
        this.nextElementSibling.classList.remove('checked');
    }
}

function showCart() {

    const cartWindow = document.querySelector('.cart');
    document.body.style.overflow = 'hidden';
    cartWindow.style.display = 'block';
}

function closeCart() {

    const cartWindow = document.querySelector('.cart');
    document.body.style.overflow = 'auto';
    cartWindow.style.display = '';
}

function getBtnCard() {
    toggleEmptyCart(true);
    const cardWrapper = document.querySelector('.cart-wrapper'),
        cardClone = this.parentNode.parentNode.cloneNode(true),
        btnRemove = cardClone.querySelector('.btn');

    btnRemove.textContent = 'Удалить';
    btnRemove.addEventListener('click', function () {
        cardClone.remove();
        checkIsEmpty();
        getSumOfCart();
    });
    cardWrapper.appendChild(cardClone);
    getSumOfCart();
}

function checkIsEmpty() {
    const cards = document.querySelectorAll('.cart-wrapper .card');
    if (cards.length !== 0) {
        return;
    } else {
        toggleEmptyCart(false);
    }
}

function toggleEmptyCart(toglle) {
    if (toglle == true) {
        document.querySelector('#cart-empty').style.display = 'none';
    } else if (toglle == false) {
        document.querySelector('#cart-empty').style.display = 'block';
    }
}

function getSumOfCart() {
    const cards = document.querySelectorAll('.cart-wrapper .card');
    // console.log(cards);
    let commonSum = 0,
        commonCount = 0;
    cards.forEach(function (card) {
        let sum = parseFloat(card.querySelector(".card > .card-body > .card-price").innerHTML);
        // console.log(sum);
        commonSum = commonSum + sum;
        commonCount++;
    });
    showSumCart(commonSum);
    showCountCart(commonCount);
}

function showSumCart(commonSum) {
    document.querySelector('.cart-total span').innerHTML = commonSum;
}

function showCountCart(commonCount) {
    document.querySelector('.counter').innerHTML = commonCount;
}

function actionCheckBoxs() {
    const checkboxs = document.querySelectorAll('.filter-check_checkbox');
    checkboxs.forEach(function (el) {
        el.addEventListener('click', activeFilter);
    });
}



function activeFilter() {
    let isChecket = this.checked;
    const cards = document.querySelectorAll('.card');

    if (this.id == 'discount-checkbox') {
        cards.forEach(function (card) {
            if (isChecket) {
                if (!card.querySelector('.card-sale')) {
                    card.parentNode.style.display = 'none';
                }
            } else {
                if (!card.querySelector('.card-sale')) {
                    card.parentNode.style.display = 'block';
                }
            }
        });
    } else if (this.id == 'new-checkbox') {
        console.log('new-checkbox');

    } else if (this.id == 'top-checkbox') {
        console.log('top-checkbox');

    } else if (this.id == 'sort-checkbox') {

    }
}


function filterPrice() {

    const cards = document.querySelectorAll('.card');


    cards.forEach(function (card) {
        const cardPrice = parseFloat(card.querySelector('.card-price').textContent);

        if (min.value != '' && cardPrice < min.value) {
            console.log('min');
            card.parentNode.style.display = 'none';
        } else if (cardPrice > min.value) {
            card.parentNode.style.display = 'block';
        }

        if (max.value != '' && cardPrice > max.value) {
            card.parentNode.style.display = 'none';
        } else if (max.value != '' && cardPrice < max.value) {
            card.parentNode.style.display = 'block';
        }
    });
}


function searchFind() {
    const search = document.querySelector('.search-wrapper_input'),
        searchText = new RegExp(search.value.trim(), 'i'),
        cards = document.querySelectorAll('.goods .card');

    cards.forEach(function (card) {
        const title = card.querySelector('.card-title');
        if (!searchText.test(title.textContent)) {
            card.parentNode.style.display = 'none';
        } else {
            card.parentNode.style.display = 'block';
        }
    });
    search.value = '';
}

window.onload = function () {

    // CHECKBOX ================================
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach(function (el) {
        el.addEventListener('change', check);
    });
    // END CHECKBOX ================================

    //CART ================================
    const cart = document.querySelector('#cart'),
        closCart = document.querySelector('.cart-close');

    cart.addEventListener('click', showCart);
    closCart.addEventListener('click', closeCart);
    //END CART ================================

    // GOODS ========================
    const cards = document.querySelectorAll('.goods .card');
    cards.forEach(function (card) {
        const btn = card.querySelector('button');
        btn.addEventListener('click', getBtnCard);
    });
    //END GOODS ========================

    //FILTERS ========================

    actionCheckBoxs();
    const min = document.querySelector('#min'),
        max = document.querySelector('#max'),
        searchBtn = document.querySelector('.search-btn'),
        search = document.querySelector('.search-wrapper_input');

    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);
    searchBtn.addEventListener('click', searchFind);
    search.addEventListener('change', searchFind);


    // END FILTERS ========================

};