document.querySelector('.read-rules').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = -250 + 'px';
};

document.querySelectorAll('.read-rules-back').forEach(function (el) {
    el.onclick = function () {
        document.querySelector('.form-slider').style.marginLeft = 0 + 'px';
    };
});