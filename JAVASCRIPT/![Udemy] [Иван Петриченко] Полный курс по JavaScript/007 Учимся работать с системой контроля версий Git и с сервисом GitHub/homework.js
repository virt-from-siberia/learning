let money;
let time; 



appData = {}; 

appData.money = prompt("Ваш бюджет на месяц?");
appData.time = prompt("Введите дату в формате YYYY-MM-DD");

console.table(appData);

expenses = {}; // объект с обязательными расходамиoptionalExpenses = {};
income = []; //объект с необязательными расходами

let savings = false;

let important ;
let cost ;

expenses.important = prompt("Введите обязательную статью расходов в этом месяце");
expenses.cost = prompt("Во сколько обойдется?");
console.table(expenses);

alert('your mony for day -' + appData.money / 30);
