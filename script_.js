'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", '');
    while (isNaN (money) || money =='' || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", '');
    }
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');
}

start();

const appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        let i = 0;
        while (i < 2) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt ("Во сколько обойдется?", '');
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''
                && a.length < 50) {
                    console.log('done');
                    appData.expenses[a] = +b;
                    i++;
                } else {
                    console.log('Data error. Enter');
                };  
        }
    },
// расчет дневного бюджета
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed(2);
        alert("Ежедневный доход: " + appData.moneyPerDay);
    },
// уровень достатка
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий уровень дохода');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень дохода');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень дохода');
        } else {
            console.log('Что-то пошло не так');
        }
    },
// сумма накоплений с депозита
    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },
// cумма определения необязательных расходов
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt ("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = a;
        }
    },
// Формирование массива income[]
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = prompt.split(', ');
    }
};

