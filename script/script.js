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
    savings: true
};

// 1 способ цикла
// for (let i = 0; i < 2; i++) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt ("Во сколько обойдется?", 0);
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''
//         && a.length < 50) {
//             console.log('done');
//             appData.expenses[a] = +b;
//         } else {
//             console.log('Data error. Enter');
//             i--;
//         }  
// }

// 2 способ цикла
function chooseExpenses() {
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
}

// 3 способ цикла
// function chooseExpenses() {
//     let i = 0;
//     do {
//         let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt ("Во сколько обойдется?", 0);
//         if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != ''
//              && a.length < 50) {
//                 console.log('done');
//                 appData.expenses[a] = +b;
//                 i++;
//             } else {
//                 console.log('Data error. Enter');
//             };  
//     }
//     while (i < 2);
// }

chooseExpenses();

// расчет дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed(2);
    alert("Ежедневный доход: " + appData.moneyPerDay);
}

// уровень достатка
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Низкий уровень дохода');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень дохода');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень дохода');
    } else {
        console.log('Что-то пошло не так');
    }
}

// сумма накоплений с депозита
function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита:" + appData.monthIncome);

    }
}

// cумма определения необязательных расходов
function chooseOptExpenses() {
    let i = 0;
    let b = 0;
    do {
        let a = prompt ("Статья необязательных расх70000одов?", '');
        if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log('done');
                b = i + 1;
                appData.optionalExpenses[b] = a;
                i++;
            } else {
                console.log('Data error. Enter');
            };  
    }
    while (i < 3);
}

detectDayBudget();
detectLevel();
checkSaving();
chooseOptExpenses();