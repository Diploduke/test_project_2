'use strict'

let raschetBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    btn = document.getElementsByTagName('button'),
    btnExpenses = btn[0],
    btnOptionalexpenses = btn[1],
    btnCountBudget = btn[2],
    inputOptionalexpenses = document.querySelectorAll('.optionalexpenses-item'),
    inputChooseIncome = document.querySelector('.choose-income'),
    checksavingsDiv = document.querySelector('.checksavings'),
    checkboxSavings = document.getElementById('savings'),
    inputChooseSum = document.querySelector('.choose-sum'),
    inputChoosePercent = document.querySelector('.choose-percent'),
    inputYearValue = document.querySelector('.year-value'),
    inputMonthValue = document.querySelector('.month-value'),
    inputDayValue = document.querySelector('.day-value');

// console.log(raschetBtn);
// console.log(budgetValue);
// console.log(daybudgetValue);
// console.log(levelValue);
// console.log(expensesValue);
// console.log(optionalexpensesValue);
// console.log(incomeValue);
// console.log(monthsavingsValue);
// console.log(yearsavingsValue);
// console.log(inputExpensesItem);
// console.log(btnExpenses);
// console.log(btnOptionalexpenses);
// console.log(btnCountBudget);
// console.log(inputOptionalexpenses);
// console.log(inputChooseIncome);
// console.log(checksavingsDiv);
// console.log(checkboxSavings);
// console.log(inputChooseSum);
// console.log(inputChoosePercent);
// console.log(inputYearValue);
// console.log(inputMonthValue);
// console.log(inputDayValue);
// console.log(inputOptionalexpenses[2]);
// console.log(inputExpensesItem[0]);


let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", "30000");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

//     while (isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", "30000");
//     }
// }

// start();


if (budgetValue.textContent == '') {
    btnExpenses.setAttribute('disabled', 'disabled');
    btnOptionalexpenses.setAttribute('disabled', 'disabled');
    btnCountBudget.setAttribute('disabled', 'disabled');
  }

/*
    btnOptionalexpenses = btn[1],
    btnCountBudget = btn[2],
*/

raschetBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");
    money = +prompt("Ваш бюджет на месяц?", "30000");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "30000");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    inputYearValue.value = new Date(Date.parse(time)).getFullYear();
    inputMonthValue.value = new Date(Date.parse(time)).getMonth() +1;
    inputDayValue.value = new Date(Date.parse(time)).getDate();
    btnExpenses.removeAttribute('disabled');
    btnOptionalexpenses.removeAttribute('disabled');
    btnCountBudget.removeAttribute('disabled');
});

btnExpenses.addEventListener('click', function() {
    let sumExpenses = 0;
    
    for (let i = 0; i < inputExpensesItem.length; i++) {
        let a = inputExpensesItem[i].value,
            b = inputExpensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sumExpenses += +b;
//            console.log("Все получилось!");
//            console.log(appData);
        } else {
            console.log("При вводе данных что-то пошло не так...");
//            i--;
        }
    };
    expensesValue.textContent = sumExpenses;
//    console.log(sumExpenses);
});


btnOptionalexpenses.addEventListener('click', function() {
    for (let i = 0; i < inputOptionalexpenses.length; i++) {
        let opt = inputOptionalexpenses[i].value;
        inputOptionalexpenses.textContent += appData.optionalExpenses[i] + ' ';

        if ((typeof (opt)) === 'string' && (typeof (opt)) != null &&
        opt != '') {
            // console.log(i);
//            let a1 = i;
            appData.optionalExpenses[i] = opt;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
//            console.log("Возможные траты указаны.");
        } else {
            console.log("Возможные траты не указаны.");
        }
    }
})

btnCountBudget.addEventListener('click', function() {

    if (appData.budget != undefined ) {
        appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else { daybudgetValue.textContent = "Произошла Ошибка";

    }

});

// inputChooseIncome.addEventListener('change', function(){ // после смены фокуса
inputChooseIncome.addEventListener('input', function(){
    let items = inputChooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkboxSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
//    console.log('appData.savings = ' + appData.savings);
});


inputChooseSum.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +inputChooseSum.value,
            percent = +inputChoosePercent.value;
        
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

inputChoosePercent.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +inputChooseSum.value,
            percent = +inputChoosePercent.value;
        
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = { 
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    // chooseExpenses: function() {
    //     for (let i = 1; i < 3; i++) {
    //         let a = prompt("Введите обязательную статью расходов в этом месяце", ""), // statya теперь a
    //             b = prompt("Во сколько обойдется?", ""); // rashod теперь b
    
    //         if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
    //             a != '' && b != '' && a.length < 50) {
    //             appData.expenses[a] = b;
    //             console.log("Все получилось!");
    //             console.log(appData);
    //         } else {
    //             console.log("При вводе данных что-то пошло не так...");
    //             let expensesObj = Object.keys(appData.expenses);
    //             if (expensesObj.length === 1) {
    //                 i = 1;
    //             } else {
    //                 i = 0;
    //             }
    //             continue;
    //         }
    //     };
    // },
    // detectDayBudget: function() {
    // //    appData.moneyPerDay = (money / 30).toFixed();
    //     alert("Ежедневный бюджет: " + appData.moneyPerDay);
    // },
    // detectLevel: function() {
    //     if (appData.moneyPerDay <= 100) {
    //         console.log("Минималка");
    //     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    //         console.log("Средний уровень достатка");
    //     } else if (appData.moneyPerDay >= 2000) {
    //         console.log("Высокий уровень достатка");
    //     } else {
    //         console.log("Ошибка");
    //     }
    // },
    // checkSavings: function() {
    //     if (appData.savings == true) {
    //         let save = +prompt("Какова сумма накоплений?"),
    //             percent = +prompt("Под какие проценты?");
    
    //         appData.monthIncome = save / 100 / 12 * percent;
    //         alert("Доход в месяц с депозита: " + appData.monthIncome);
    //     }
    // },
    // chooseOptExpenses: function() {
    //     for (let i = 1; i < 4; i++) {
    //         let b = prompt("Введите необязательную статью расходов " + i, "");
    //         // b = prompt("Во сколько обойдется?", "");
    
    //         if ((typeof (b)) === 'string' && (typeof (b)) != null &&
    //             b != '') {
    //             // console.log(i);
    //             let a = i;
    //             appData.optionalExpenses[a] = b;
    //             console.log("Все получилось!");
    //             // console.log("Ключ: " + a + " | Значение: " + appData.optionalExpenses[a]);
    //         } else {
    //             let a = i;
    //             console.log("При вводе данных что-то пошло не так...");
    //             let optionalExpensesObj = Object.keys(appData.optionalExpenses);
    //             // console.log("Ключ: " + a + " | Значение: " + appData.optionalExpenses[a]);
    //             // console.log(optionalExpensesObj.length);
    
    //             if (optionalExpensesObj.length === 1) {
    //                 i = 1;
    //             } else if (optionalExpensesObj.length === 2) {
    //                 i = 2;
    //             } else {
    //                 i = 0;
    //             }
    //             continue;
    //         }
    //     }
    // },
    // chooseIncome: function() {
    //     for (let i = 1; i < 2; i++) {
    //         let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

    //         if ((typeof (items)) === 'string' && (typeof (items)) != null &&
    //         items != '') {
    //                 console.log("Все получилось!");
    //                 appData.income = items.split(', ');
    //                 appData.income.push(prompt('Может что-то еще?'));
    //                 appData.income.sort();
    //                 appData.income.unshift(undefined); // Тема! Замена номера 0
    //             } else {
    //                 console.log("При вводе данных что-то пошло не так...");
    //                 i = 0;
    //             }
    //         continue;
    //     }

    // }
};







