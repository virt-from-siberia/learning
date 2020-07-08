function init() {
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 1; i < tabBody.length; i++) {
        tabBody[1].style.display = 'none';
    }
}

init();

let tab = document.querySelectorAll('.tab');

tab.forEach(function (el) {
    // el.addEventListener('click', showTabs);
    el.onclick = showTabs;
});

function showTabs() {
    // console.log(123);
    let data = this.getAttribute('data');
    console.log(data);
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 0; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
    // document.querySelector('.tab-body[data="' + data + '"]').style.display = 'block';
    document.querySelector(`.tab-body [data="${data}"]`).style.display = 'block';
}