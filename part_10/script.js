'use strict';

// ============== Конструкторы и классы (ES5) ==============
// function User(name, id) {       // Функция-конструктор (конструирует новых
//     this.name = name;           // пользователей в объекте).
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел.');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

// ============== Контекст вызова (this) ==============

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15, 
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();
// ------------------------
// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));    // метод вызова 1 (передача одного 
//                                              // аргумента) - в виде строки
// console.log(sayName.apply(user, ['Snow']));  // метод вызова 2 (передача нескольких
//                                              // аргументов) - в виде массива

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

// ------------------------

/*
let button = document.querySelector('button');

button.addEventListener ('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
});
*/

// 1) Просто вызов функции (window, underfined(ES6))
// 2) Метод объекта this = сам объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind

// ============== Конструкторы и классы (ES6) ==============
// class User {
//     constructor(name, id) {
//         this.name = name; // пользователей в объекте).
//         this.id = id;
//         this.human = true;
//     }    
//     hello() {
//         console.log(`Hello! ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел.`);
//     }
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();
// ivan.exit();
// ============== Конец "Конструкторы и классы (ES6)" ==============

function hello() {
    console.log(this);
    }
    
    hello();