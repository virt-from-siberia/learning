var userEmail = getCookie('email');


console.log(userEmail);

ajax('core/get_user_data.php', 'POST', getUserData, {
    "email": userEmail
});


function getCookie(email) {
    var name = email + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    // console.log(decodedCookie);
    var ca = decodedCookie.split(';');
    // console.log('ca = ' + ca);
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function getUserData(resault) {
    console.log(resault);
    resault = JSON.parse(resault);

    if (resault !== 2) {
        document.querySelector('#signup-name').value = resault.name;
        document.querySelector('#signup-pass').value = resault.password;
        document.querySelector('#signup-birthday').value = resault.birthday;
    }
    console.log(resault);
}


document.querySelector('#signup-submit').onclick = function (evt) {
    evt.preventDefault();
    let updateData = {
        "email": userEmail,
        "name": document.querySelector('#signup-name').value,
        "pass": document.querySelector('#signup-pass').value,
        "birthday": document.querySelector('#signup-birthday').value,
    };
    ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
};


function updateUserData(resault) {
    console.log(resault);
    alert('Данные успешно внесены ы базу данных');

}