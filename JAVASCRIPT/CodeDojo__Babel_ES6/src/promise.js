console.log('=============== PROMISE ===============');


function applyFoeVisa(documents) {

    console.log('Обработка заявления....');

    let promise = new Promise(function (resolve, rejected) {
        Math.random() > .5 ? resolve() : rejected('В визе отказано');
    });
    return promise;
}


function gerVisa(visa) {
    console.info('Виза получена');
    return new Promise(function (resolve, rejected) {
        resolve(visa);
    });
}

function bookHotel(visa) {
    console.log(visa);
    return new Promise(function (resolve, reject) {
        resolve({

        });
    })
}

function buyTickets(booking) {
    console.log('Покупаем билеты');
    console.log('Бронь', booking);
}


applyFoeVisa({})
    .then(gerVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.log(error));