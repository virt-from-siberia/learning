let select = document.querySelector('#select-1');
let radio = document.querySelector('input[name ="rad-1"]');
let sendForm = document.querySelector('.send');
let form = document.querySelector('form');

select.onchange = function () {
    console.log(select.value);
    console.log(radio.value);
};

sendForm.onclick = function (event) {
    event.preventDefault();
    console.log('work');
    console.log(serialize(form));
}