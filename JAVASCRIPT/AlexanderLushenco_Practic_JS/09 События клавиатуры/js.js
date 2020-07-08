document.querySelector('#test').onkeypress = function (evt) {
    console.log(evt.keyCode);


}


let positionX = 0;
let positionY = 0;

document.onkeypress = function (evt) {
    console.log(evt.keyCode);
    let sq = document.querySelector('.sq');

    if (evt.keyCode == 100) {

        positionX = positionX + 10;
        sq.style.marginLeft = positionX + 'px';
    }
    if (evt.keyCode == 97) {
        positionX = positionX - 10;
        sq.style.marginLeft = positionX + 'px';
    }
    if (evt.keyCode == 115) {
        positionY = positionY + 10;
        sq.style.marginTop = positionY + 'px';
    }
    if (evt.keyCode == 119) {
        positionY = positionY - 10;
        sq.style.marginTop = positionY + 'px';
    }
};