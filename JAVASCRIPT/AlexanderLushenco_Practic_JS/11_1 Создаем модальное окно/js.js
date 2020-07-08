let buttonShow = document.querySelectorAll('.modal__show');
let buttonClose = document.querySelectorAll('.modal__close');


buttonShow.forEach(function (el) {
    el.onclick = showModal;
});

buttonClose.forEach(function (el) {
    el.onclick = closeModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    let modal = document.querySelector(modalId);
    modal.parentNode.classList.remove('hide');
}

function closeModal() {
    let modalId = this.dataset.modal;
    let modal = document.querySelector(modalId);
    modal.parentNode.classList.add('hide');
}