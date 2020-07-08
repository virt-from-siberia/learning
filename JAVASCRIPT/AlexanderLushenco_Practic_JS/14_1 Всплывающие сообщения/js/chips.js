function chips(message, timeRemove = 1500) {
    let chips = document.createElement('div');
    chips.classList.add('chips');
    chips.innerHTML = message;
    addChips(chips);

    setTimeout(() => {
        deliteChips(chips);
    }, timeRemove);
};

function deliteChips(el) {
    el.remove();
};

function addChips(chips) {
    let chipsField = document.querySelector('.chipsField');
    console.log();

    if (chipsField === null) {

        let chipsField = document.createElement('div');
        console.log(chipsField);
        chipsField.classList.add('chipsField');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);

    } else {

        chipsField.appendChild(chips);

    }
}


let incriment = 0;
document.querySelector('button').onclick = function () {
    incriment++;
    chips('hello ' + incriment);
};