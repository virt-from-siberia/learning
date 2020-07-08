document.querySelector('.push').onclick = show;

function show() {
    console.log('work');
    console.log(document.querySelector('.text-input').value);
    console.log(document.querySelector('.pass-input').value);
    console.log(document.querySelector('.range-input').value);
    console.log(document.querySelector('.date-input').value);
    console.log(document.querySelector('.checkbox-input').checked);

}

