'use strict'

// Задание 4. =======================================

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "30000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "30000");
    }
}

start();

let appData = { 
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""), // statya теперь a
                b = prompt("Во сколько обойдется?", ""); // rashod теперь b
    
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                console.log("Все получилось!");
                console.log(appData);
            } else {
                console.log("При вводе данных что-то пошло не так...");
                let expensesObj = Object.keys(appData.expenses);
                if (expensesObj.length === 1) {
                    i = 1;
                } else {
                    i = 0;
                }
                continue;
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (money / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay <= 100) {
            console.log("Минималка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какие проценты?");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let b = prompt("Введите необязательную статью расходов " + i, "");
            // b = prompt("Во сколько обойдется?", "");
    
            if ((typeof (b)) === 'string' && (typeof (b)) != null &&
                b != '') {
                // console.log(i);
                let a = i;
                appData.optionalExpenses[a] = b;
                console.log("Все получилось!");
                // console.log("Ключ: " + a + " | Значение: " + appData.optionalExpenses[a]);
            } else {
                let a = i;
                console.log("При вводе данных что-то пошло не так...");
                let optionalExpensesObj = Object.keys(appData.optionalExpenses);
                // console.log("Ключ: " + a + " | Значение: " + appData.optionalExpenses[a]);
                // console.log(optionalExpensesObj.length);
    
                if (optionalExpensesObj.length === 1) {
                    i = 1;
                } else if (optionalExpensesObj.length === 2) {
                    i = 2;
                } else {
                    i = 0;
                }
                continue;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 1; i < 2; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

            if ((typeof (items)) === 'string' && (typeof (items)) != null &&
            items != '') {
                    console.log("Все получилось!");
                    appData.income = items.split(', ');
                    appData.income.push(prompt('Может что-то еще?'));
                    appData.income.sort();
                    appData.income.unshift(undefined); // Тема! Замена номера 0
                } else {
                    console.log("При вводе данных что-то пошло не так...");
                    i = 0;
                }
            continue;
        }

    }
};

appData.chooseIncome();

document.write('Способы доп. заработка:<br>');
appData.income.forEach(function(item, i) { 
    if (i != 0) {
        document.write(i + ': ' +  item + '<br>');
    }
});

console.log('Наша программа включает в себя данные: ');

for (let prop in appData) {
    console.log(prop + ": " + appData[prop]);
}

  
  // Выведет:
  // "obj.a = 1"
  // "obj.b = 2"
  // "obj.c = 3"

// console.log(appData);

/*
chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let b = prompt("Введите необязательную статью расходов " + i, "");
            // b = prompt("Во сколько обойдется?", "");
    
            if ((typeof (b)) === 'string' && (typeof (b)) != null &&
                b != '') {
                // console.log(i);
                let a = i;
                appData.optionalExpenses[a] = b;
                console.log("Все получилось!");
                // console.log("Ключ: " + a + " | Значение: " + appData.optionalExpenses[a]);
            } else {
                let a = i;
                console.log("При вводе данных что-то пошло не так...");
                let optionalExpensesObj = Object.keys(appData.optionalExpenses);
                // console.log("Ключ: " + a + " | Значение: " + appData.optionalExpenses[a]);
                // console.log(optionalExpensesObj.length);
    
                if (optionalExpensesObj.length === 1) {
                    i = 1;
                } else if (optionalExpensesObj.length === 2) {
                    i = 2;
                } else {
                    i = 0;
                }
                continue;
            }
        }
    },
*/

// chooseExpenses();
// detectDayBudget();
// checkSavings();
// console.log(appData);
// chooseOptExpenses();


/* appData.moneyPerDay = (money / 30).toFixed(); // 1. Округляет до целого, либо до 
                                              // кол-ва знаков, указ. в ().
                                              // 2. Возвращает строку.
alert(" Ежедневный бюджет: " + appData.moneyPerDay); */

// detectLevel();

// Конец задания 4 ========================================

// Тема 3. Функции =======================================

// let calc = (a,b) => a+b;

// console.log(calc(3,4));
// console.log(calc(8,4));

// let str = "test"; 
// console.log(str.length); // свойства

// console.log(str.toUpperCase()); // методы
// console.log(str.toLowerCase()); // методы

// let twelve = "12.2";
// console.log(Math.round(twelve)); // округляет

// let twelve1 = "12.2px";
// console.log(parseInt(twelve1));   // 12 преобразует (в т.ч. в другую систему исчисления)
// console.log(parseFloat(twelve1)); // 12.2

// let num = 20;

// function showFirstMessage(text) { // Имя - лучше глагол с привязкой, (аргумент)
//     alert(text);                    // действия
//     // let num = 10;
//     console.log(num);
// }
// showFirstMessage("Привет!");
// console.log(num);

/* *** function declaration - создаются до начала кода, можно
        вызывать до объявления. *** */
/*
console.log(calc(3,4));
console.log(calc(8,4));

function calc(a,b) {
     return (a + b);
}
*/
// function retVar() {
//     let num = 50;
//     return num; // выводит переменную за пределы функции, закрывает функцию.
// }

// let anotherNum = retVar();
// console.log(anotherNum);

/* *** function expression - создается, когда код до нее доходит. *** */

/*
let calc = function(a,b) {
    return (a + b);
}

console.log(calc(3,4));
console.log(calc(8,4));
*/

/* *** Стрелочные - Современный краткий формат (можно не везде). *** */

// Конец темы 3 =======================================
