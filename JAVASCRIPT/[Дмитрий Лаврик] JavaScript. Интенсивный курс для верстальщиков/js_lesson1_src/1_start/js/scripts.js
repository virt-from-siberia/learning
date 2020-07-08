// window.onload = function(e){

//     /*
//     document.querySelector -> один элемент дом
//     document.querySelectorAll -> массив элементов дом

//     document.querySelector(css селектор)

//     */

//     var buttons = document.querySelectorAll('.actions input');

//     for(var i = 0; i < buttons.length; i++){
//         buttons[i].onclick = btnClick1;
//     }

// }

// function btnClick1(e){
//     // this - элемент DOM
//     /* for(var k in this){
//         document.body.innerHTML += '<b>' + k + '</b> ' + this[k] + '<br>';
//     } */
//     var name = this.getAttribute('name');

//     if(name == 'save'){
//         console.log('1');
//     }
//     else if(name == 'delete'){
//         console.log('2');
//     }
// }


window.onload = function (event) {


    let arr = [];



    let buttons = document.querySelectorAll('.actions input');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = btnClick;
    }

    let val = document.querySelector('.val');
    val.onchange = valChange;


    // document.body.addEventListener('click', some);
    // document.body.addEventListener('click', some1);
    // document.body.addEventListener('contextmenu', some);


    function btnClick(event) {
        console.log(this.name);
        var name = this.getAttribute('data-price');
        console.log(name);
        console.log(this.getAttribute('data-lol'));



    }

    function valChange() {
        console.log(this.value);
        arr.push(this.value);
        console.log(arr);
        this.value = '';
        localStorage.setItem('Array', arr);
    }

    function some(e) {
        console.log(1);
    }

    function some1(e) {
        console.log(2);
    }



    let a = ['a', 'b00', 'c'];

    let b = {
        russia: 'Moscow',
        use: 'Washington',
        hungary: 'Budapesht'
    }

    for (let key in b) {
        console.log(b[key] + ' lol');
        console.log(key);


    }



};