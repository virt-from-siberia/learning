//  УДОАЛЕНИЕ КУКИ


document.querySelector('.btn').onclick = function (event) {

    var cock = document.cookie;
    console.log(cock);

    var d = new Date();
    d.setTime(d.getTime() - (60 * 1060 * 1000));
    var expires = d.toUTCString();
    document.cookie = `email=${cock}; expires=${expires}; path=/`;
    location.reload();

};