document.querySelector('#elastic').oninput = function () {
    console.log(1);
    let val = this.value.trim();
    console.log(val);
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
        elasticItems.forEach(function (el) {
            if (el.innerText.search(val) == -1) {
                console.log('add hide');
                el.classList.add('hide');
                el.innerHTML = el.innerText;
            } else {
                el.classList.remove('hide');
                let str = el.innerText;
                el.innerHTML = insertMark(str, el.innerText.search(val), val.length);
            }
        });
    } else {
        elasticItems.forEach(function (el) {
            el.classList.remove('hide');
            el.innerHTML = el.innerText;
        });
    }
};

function insertMark(str, pos, length) {
    return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + length) + '</mark>' + str.slice(pos + length);
}