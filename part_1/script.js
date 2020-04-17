'use strict'

// Задание 1 =======================================
let money = prompt("Ваш бюджет на месяц?", "30000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

let appData = {
    budget: money,
    timeData: "time",
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
 }

let statya1 = prompt("Введите обязательную статью расходов в этом месяце", 
                     "Транспорт");
let rashod1 = prompt("Во сколько обойдется?", "2000");
let statya2 = prompt("Введите еще одну обязательную статью расходов " + 
                     "в этом месяце", "Коммунальные платежи");
let rashod2 = prompt("Во сколько обойдется?", "5000");

appData.expenses.statya1 = rashod1;
appData.expenses.statya2 = rashod2;

let sutki_all = money / 30;
let sutki_rashod1 = rashod1 / 30;
let sutki_rashod2 = rashod2 / 30;

// --- Вариант 1 ---
// alert(" Ваш бюджет на один день составляет " + 
//     sutki_all + " руб., из них " + sutki_rashod1 + 
//     " руб. на " + statya1 + ", а " + sutki_rashod2 + 
//     " руб. на " + statya2 );

// --- Вариант 2 --- 
let forAlert = 'Ваш бюджет на один день составляет ' +
    sutki_all + ' руб., из них ' + sutki_rashod1 +
    ' руб. на ' + statya1 + ', а ' + sutki_rashod2 + 
    ' руб. на ' + statya2 ;

alert(forAlert);

console.log(time);
console.log(appData.expenses.statya1);
console.log(appData.expenses.statya2);
console.log(sutki_all);
console.log(statya1);
console.log(sutki_rashod1);
console.log(statya2);
console.log(sutki_rashod2);
console.log(forAlert);

// Конец задания 1 =======================================

// Обучение. Тема 1 =======================================
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// var number = 5;
// var string = "Привет!";
// var sym = Symbol();
// var boolean = true;
// null;
// underfined;
// var obj = {};

// let person = {
//     name: "Denis",
//     age: 42,
//     isMarried: true
// }

// console.log(leftBorderWidth);
// console.log(second);
// console.log(4/0);
// console.log(person.name);
// console.log(person["age"]);

// let arr = ['Московский', 'Невский', 'Приморский'];
// console.log(arr[1]);

// // let answer = confirm("Вы здесь?");
// // console.log(answer);

// // let answer = prompt("Вам 18", "Да");
// // console.log(answer);

// let answer = +prompt("Вам 18?", "Да");
// console.log(answer);
// console.log(typeof(arr));
// console.log(typeof(answer));

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);

// console.log("2" == 2); // true
// console.log("2" === 2); // false

// let isCheced = false,
//     isClose = false;
// console.log(isCheced && isClose); // и
// console.log(isCheced  || !isClose); // или

// Конец темы 1 =======================================