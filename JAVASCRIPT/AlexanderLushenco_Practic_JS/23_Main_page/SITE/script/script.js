// MODAL INIT =======
// ИНИАЦИАЛИЗАЦИЯ ОТКРЫТИЯ МОДАЛА НА КНОПКИ
document.addEventListener('DOMContentLoaded', function () {
    var box = document.querySelector('.modal');
    M.Modal.init(box, {
        inDuration: 300,
        outDuration: 375
    });
});
// MODAL INIT END=======


// ИНИАЦИАЛИЗАЦИЯ МЕТОДА  ОТКРЫТИЯ МОДАЛА НА ФУНКЦИЯ
//ФУНКЦИЯ ОТКРЫТИЯ  instance.open();
var elem = document.querySelector('.modal');
var instance = M.Modal.init(elem, {});
// MODAL INIT END=======



//================ REGESTRATION USERS =========================///

document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();

    let name = document.querySelector('#signup-name').value,
        pass = document.querySelector('#signup-pass').value,
        email = document.querySelector('#signup-email').value,
        birthday = document.querySelector('#signup-birthday').value,
        sex = document.querySelectorAll('.sex');



    let valueElement = '';
    sex.forEach(function (element) {

        if (element.checked) {
            valueElement = element.value;
        }

    });

    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": valueElement
    };


    // console.table(data);

    ajax('core/signup.php', 'POST', signUp, data);

};

function signUp(resault) {
    console.log(resault);

    if (resault == 2) {
        M.toast({
            html: 'Заполние все поля'
        });

        instance.open();
        document.querySelector('.modal-close').addEventListener('click', function () {
            instance.close();
        });

        // alert('Заполние все поля');
    } else if (resault == 1) {
        M.toast({
            html: 'Такой пользовательне найден'
        });

        instance.open();
        document.querySelector('.modal-close').addEventListener('click', function () {
            instance.close();
        });

        // alert('Ваши данные успешно внесены');
    }
}

//================ LOGIN USERS =========================///

document.querySelector('#login-submit').onclick = function (event) {
    event.preventDefault();


    let pass = document.querySelector('#login-pass').value,
        email = document.querySelector('#login-email').value;


    let data = {
        "pass": pass,
        "email": email,
    };

    ajax('core/login.php', 'POST', login, data);

};

function login(resault) {

    if (resault == 2) {
        M.toast({
            html: 'Заполние все поля'
        });

        instance.open();
        document.querySelector('.modal-close').addEventListener('click', function () {
            instance.close();
        });

        // alert('Заполние все поля');
    } else if (resault == 0) {
        M.toast({
            html: 'Такой пользовательне найден'
        });

        instance.open();
        document.querySelector('.modal-close').addEventListener('click', function () {
            instance.close();
        });

        // alert('Такой пользовательне найден');
    } else {

        resault = JSON.parse(resault);
        var d = new Date();
        d.setTime(d.getTime() + (10 * 60 * 1000));
        var expires = d.toUTCString();
        document.cookie = `email=${resault.email}; expires=${expires}; path=/`;
        location.href = "cabinet.php";
    }
}