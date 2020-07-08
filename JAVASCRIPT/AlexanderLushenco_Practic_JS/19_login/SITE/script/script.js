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
        alert('Заполние все поля');
    } else if (resault == 1) {
        alert('Ваши данные успешно внесены');
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
    // console.table(data);

    ajax('core/login.php', 'POST', login, data);

};

function login(resault) {
    console.log(resault);

    if (resault == 2) {
        alert('Заполние все поля');
    } else if (resault == 0) {
        alert('Такой пользовательне найден');
    } else {

    }
}