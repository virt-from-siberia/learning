let money, time;

function start() {
    money = +prompt("Ваш буджет");
    time = +prompt("ВВедите дату");

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш буджет ?', '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpensis: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько обойдется ");

            if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '') {
                console.log("Все верно");
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный буджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 ) {
            console.log("Средний уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }

    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений ?");
            let percent = +prompt("Какова сумма накоплений ?");

            appData.moneyIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего дипозита : " + appData.moneyIncome);
        }
    },
    chooseOptExpenses() {
        for (leti = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов? ");
            appData.optionalExpensis[i] = opt;
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход(перечислети через запятую)');
        if ((typeof (items)) != null &&   items != '' ) {
            appData.income = items.split(', ');
        }else{
            appData.chooseIncome();
        }
        appData.income.push(prompt("Что то еще ?"));
        appData.income.sort();        

        for( var i = 0, len = appData.income.length; i < len; i++ ){
            alert("Способы доп. заработка: " + appData.income[i]);
            
        }

        console.log("Наша программа включает в себя данные: " + Object.keys(appData));

        for (key in appData) {

            console.log("Наша программа включает в себя данные: " + key);
          }

        

    }
};