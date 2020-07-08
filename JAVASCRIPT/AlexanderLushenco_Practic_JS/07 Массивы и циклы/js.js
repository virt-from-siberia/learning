document.querySelector('.push').onclick = function () {

    let radio = document.querySelectorAll('.radio-input');
    console.log(radio);


    radio.forEach(function (el) {
        if (el.checked) {
            console.log(el.value);
        }
    });

    let option = document.querySelectorAll('#my-select option');
    option.forEach(function (el) {
        if (el.selected) {
            console.log(el.value);
        }
    });

}