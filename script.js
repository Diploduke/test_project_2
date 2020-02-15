'use strict'

// Задание 2 =======================================
let money = +prompt("Ваш бюджет на месяц?", "30000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
 };

// --- 1. Цмкл FOR ---
for (let i = 1; i < 3; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""), // statya теперь a
        b = prompt("Во сколько обойдется?", ""); // rashod теперь b

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null  
        && a != '' && b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
        console.log("Все получилось!");
        console.log(appData);
        // console.log(i);
        // console.log("Ключ: " + a + " | Значение: " + appData.expenses[a]);   // 2  4
        // console.log(typeof(appData.expenses[a]));
        // console.log(Object.keys(appData.expenses));
    } else {
        console.log("При вводе данных что-то пошло не так...");
        // console.log(i);
        // console.log(appData);
        // console.log("Ключ: " + a + " | Значение: " + appData.expenses[a]);
        // console.log(typeof(appData.expenses[a]));
        // console.log(Object.keys(appData.expenses));
        let expensesObj = Object.keys(appData.expenses);
        // console.log(expensesObj.length);
        // console.log("Type of expensesObj.length: " + typeof(expensesObj.length));

        if ( expensesObj.length === 1 ) {
            i = 1;
        } else {
            i = 0;
        }
        //  i = 0;
        continue;
    }
};

// --- 2. Цикл while ---
/*
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""), // statya теперь a
        b = prompt("Во сколько обойдется?", ""); // rashod теперь b
    i++;
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null  
        && a != '' && b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
        console.log("Все получилось!");
        console.log(appData);
    } else {
        console.log("При вводе данных что-то пошло не так...");
        i = 0;
        continue;
    }
};
*/

// --- 3. Цикл DO ---
/*
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""), // statya теперь a
        b = prompt("Во сколько обойдется?", ""); // rashod теперь b
    i++;
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null  
        && a != '' && b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
        console.log("Все получилось!");
        console.log(appData);
    } else {
        console.log("При вводе данных что-то пошло не так...");
        i = 0;
        continue;
    }
}
while (i < 2);
*/


appData.moneyPerDay = money / 30;

alert(" Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
    console.log("Минималка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}

// Конец задания 2 ========================================

// Обучение. Тема 2 =======================================

// if (2 * 4 == 8) {
//     console.log("Правильно!");
// } else {
//     console.log("Неправильно!");
// }

/* --- if простой и в виде "тернарного" оператора ---
let num = 50;
if (num < 49) {
    console.log("Неправильно!");
} else if (num > 100) {
    console.log("Многовато!");
} else {
    console.log("Правильно!");
}
(num == 50) ? console.log("Правильно!") : console.log("Неправильно!");
*/

// --- switch --- 
/*
let num = 50;
switch (num) {
    case num < 49:
        console.log("Неправильно!");
        break;
    case num > 100:
        console.log("Все еще многовато!");
        break;
    case num > 75:
        console.log("Многовато!");
        break; 
    case 50:
        console.log("Идеально! (для switch)");
        break;
    default: 
        console.log("Что-то не так!");
        break;
}
// --- while (цикл) ---
let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }
// --- do (что-то сделать, потом проверить) ---
let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55)
// --- for ---
for (let i = 1; i < 8; i++) {
    if (i == 6) {
//        break;    // Прервать
        continue;   // Для исключения некоторых (возм. четных) значений
    }
    console.log(i);
}
*/
// Конец темы 2 =======================================