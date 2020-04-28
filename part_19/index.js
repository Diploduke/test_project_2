'use strict';

// let app = 'data';

// ================== Модули ====================

// ------------ Способ 1 - Безымянная функция -------------

let number = 1;

(function() {                       // Безымянная функция
    let number = 2;                 // она анонимная и самовызывающаяся*
    console.log(number);

    return console.log(number + 3);
}())                                // * Вызов безымянной функции ()

console.log(number);

// ------------ Способ 2 - Объектный интерфейс -------------

let user = (function() {
    let privat = function() {
        console.log('Я приватная функция');
    }

    return {
        sayHello : function() {
            console.log('Hello!');
        }
    }

}())

console.log(user);
console.log(user.sayHello());

// ------------ Способ 3 --------------

let user = (function() {
    let privat = function() {
        console.log('Я приватная функция');
    }

    let sayHello = function() {
        console.log('Hello!');
    }

    return {
        sayHello : sayHello
    }

}())

console.log(user);
console.log(user.sayHello());