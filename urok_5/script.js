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


// Урок 5. =======================================

// Преобразование в строку -----------------------

let a = String(4);                              // 1: String(1);
console.log('a = ' + typeof(a));

console.log('https://123.ru/cayalog/' + 5);     // 2: Слияние со строкой

// Преобразование в число ------------------------
let a = String(4); 
let b = Number(a);                              // 1: Number(1);
console.log(b);
console.log('b = ' + typeof(b));
console.log('a = ' + typeof(a));
let c = +'a';                                   // 2: Унарный +
console.log('c = ' + typeof(c));

let d = '15px';
console.log('d = ' + d);
console.log(parseInt(d, 10));                   // 3: parseInt
console.log(d + ', 10 = ' + typeof(parseInt(d, 10)));

let ans = +prompt("Hello?", '');                // Пример

// 0, '', null, underfined, NaN                 Всегда "false"

let switcher = null;                  // Условие не будет выполнено
if (switcher) {
    console.log('work...')
}
switcher = 1;                         // Условие будет выполнено
if (switcher) {
    console.log('work...')
}

// Преобразование в Boolean ------------------------

console.log(typeof(Boolean('5')));  // 1 способ - Boolean('5')
console.log(Boolean('5'));
console.log(typeof(!!('5')));       // 2 способ - !!


// Проверка задания 5 ------------------------
/*
let x = 5;

console.log( x++ );

console.log( [ ] + false - null + true );

let y = 1; let x = y = 2;
console.log(x);

let a = ([ ] + 1 + 2);
console.log(a);
console.log([ ] + 1 + 2);

console.log("1"[0]);

console.log(2 && 1 && null && 0 && undefined);

console.log(!!( 1 && 1 ));
console.log( 1 && 1 );

console.log(!!( 1 && b ));
console.log( a && b );

console.log( null || 2 && 3 || 4 );

console.log( +"Infinity" );

console.log( 0 || "" || 2 || undefined || true || falsе );


let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a);
console.log(b);

if (a == b) {
    console.log('Да');
} else {
    console.log('Нет');
}

alert( +"Infinity" );

if ("Ёжик" > "яблоко") {
    console.log('Да');
} else {
    console.log('Нет');
}
*/
// --- архив --- //
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

