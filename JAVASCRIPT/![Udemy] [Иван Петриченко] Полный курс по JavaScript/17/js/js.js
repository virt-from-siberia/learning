let startBtn = document.querySelector('#start');

let budgetValue = document.querySelector('.daybudget-value');
let level = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalexpenses = document.querySelector('.optionalexpenses-value');
let income = document.querySelector('.income-value');
let monthsavings = document.querySelector('.monthsavings-value');
let yearsavings = document.querySelector('.yearsavings-value');

let expenseItem = document.querySelectorAll('.expenses-item');
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let buttonExpenses = document.querySelector('.expenses-item-btn');
let buttonOptionalexpenses = document.querySelector('.optionalexpenses-btn');

// Введите статьи возможного дохода через запятую
let chooseIncome = document.querySelector('.choose-income');
//чекбокс
let checkbox = document.querySelector('#savings');
//сумма
let chooseSum = document.querySelector('.choose-sum');
// процент
let choosePercent = document.querySelector('.choose-percent');
// год
let yearValue = document.querySelector('.year-value');
// месяц
let monthValue = document.querySelector('.month-value');
// день
let dayValue = document.querySelector('.day-value');

let money, time;

let appData = {};




startBtn.addEventListener('click', function () {
    time = prompt("Введите дату");
    money = +prompt("Ваш буджет на месяц");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш буджет на месяц");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
})

buttonExpenses.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expenseItem.length; i++) {
        let a = expenseItem[i].value,
            b = expenseItem[++i].value;

        if (typeof (a) != null && typeof (a) != null && a != '' && b != '') {
            console.log('Все верно');
            appData.expensesSum[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});




// chooseIncome: function() {
//     let items = prompt('Что принесет дополнительный доход(перечислети через запятую)');
//     if ((typeof (items)) != null && items != '') {
//         appData.income = items.split(', ');
//     } else {
//         appData.chooseIncome();
//     }


console.log(monthsavings);