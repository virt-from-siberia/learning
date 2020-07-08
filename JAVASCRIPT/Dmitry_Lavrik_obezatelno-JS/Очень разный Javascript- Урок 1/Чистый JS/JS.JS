window.addEventListener('load', function () {

    let faq = document.querySelector('.faq');
    let answer = document.querySelectorAll('.faq_ask');

    answer.forEach(function (el) {
        el.addEventListener('click', function () {
            console.log('answer');
        });
    });

    if (faq !== null) {
        faq.addEventListener('click', function (evt) {
            if (evt.target.classList.contains('faq_ask')) {
                console.log(evt.target.parentNode);
                evt.target.parentNode.querySelector('.faq-answer').classList.toggle('faq-answer--shoewd');
            }
        });
    }
    let form = document.querySelector('.form');

    if (form !== null) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            let formDate = new FormData(form);

            fetch('lol.php', {
                method: 'POST',
                body: formDate
            }).then(function (respone) {
                respone.json().then(function (obj) {
                    console.log(obj);
                });
            });

        });
    }


});