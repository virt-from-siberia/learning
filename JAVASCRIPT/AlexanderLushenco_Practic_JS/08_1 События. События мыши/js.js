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

let onclick = document.querySelector('.onclick').onclick = function () {
    console.log('click');
}
let dobleCnclick = document.querySelector('.doble-onclick').onclick = function () {
    console.log('double - click');
}

window.onload = function () {

    document.querySelector('.block').style.textAlign = "center";
}