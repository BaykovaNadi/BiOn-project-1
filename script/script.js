'use strict';

let money = +prompt ("Ваш бюджет на месяц?", 0);
let time = prompt ("Введите дату в формате YYYY-MM-DD", '');

const appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt ("Во сколько обойдется?", 0);
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''
        && a.length < 50) {
            console.log('done');
            appData.expenses[a] = +b;
        } else {

        }  
};

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный доход: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Низкий уровень дохода');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень дохода');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень дохода');
} else {
    console.log('Что-то пошло не так');
};