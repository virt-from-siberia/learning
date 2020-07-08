alert('lol');

let money = +prompt("Ваш буджет"),
    time = prompt("Введите дату");

let appData = {

    budhet: money,
    expenses: {},
    optionalExpensen: {},
    income: [],
    timeData: time,
    savings: false

};



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 20) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        break;
    }
};

appData.moneyPerDay = appData.budhet / 30;
alert("Ежедневный буджет: " + appData.moneyPerDay);
console.table(appData);

    if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");        
        } else if (appData.moneyPerDay > 100) 
           {
            console.log("Средний уровень достатка")
        } else if (appData.moneyPerDay > 500)
           {
            console.log("Высокий уровень достатка")
        } else { 
            console.log("Нет уровня достатки как токавого")
         };