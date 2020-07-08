// let timerId = setTimeout(sayHello, 5000);
// clearTimeout(timerId);


// let timerId = setInterval(sayHello, 1000);
// clearTimeout(setInterval);

// function sayHello(){
//     console.log('hellow world');
// }


// let timerId = setTimeout(function log(){
//     console.log('hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let intrvalBottomRight = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(intrvalBottomRight);
            let intrvalTop = setInterval(frameTop, 10);

            function frameTop() {
                if (pos == 0) {
                    clearInterval(intrvalTop);
                    let intervalLeft = setInterval(frameLeft, 10);
                    pos = 300;

                    function frameLeft() {
                        if (pos == 0) {
                            clearInterval(intervalLeft);
                            myAnimation();
                        } else {
                            pos--;
                            elem.style.left = pos + 'px';
                        }
                    }
                } else {
                    pos--;
                    elem.style.top = pos + 'px';
                }
            }
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);
let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event){
    if(event.target && event.target.classList.contains('first')){
        console.log('hello');
    }
});
