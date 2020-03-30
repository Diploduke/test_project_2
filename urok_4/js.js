'use strict'

// === callback-функции ===
/*
function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Прошел 3-й урок!");
}

learnJS("JavaScript", done);
*/
// learnJS("JavaScript", function() {
//     console.log("Прошел 3-й урок!");
// })

// === Объекты ===

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойства ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

// === Массивы ===

// let arr = [1, 2, 3, 4, 5];

/*
arr.pop();          // удаление последнего элемента массива
arr.push("5");      // добаление последнего элемента массива
arr.shift();        // удаление ПЕРВОГО элемента массива
arr.unshift("1");   // добаление ПЕРВОГО элемента массива
*/
/*
arr[99] = 99;       // так делать нельзя
console.log(arr.length);
console.log(arr);
*/

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

/*
let arr = ["first", 2, 3, "four", 5];

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});    // Перебор масиива (элемент, номер, массив)

console.log(arr);

let mass = [1, 3, 4, 6, 7];

for (let key of mass) {     // выводит ЗНАЧЕНИЯ, а не "номера"
    console.log(key);
}
*/

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');    // разбивает строку на массив по ","

// console.log(arr);

// let arr = ["qwerty", 'asdfgh', 'ZXCVBN', '1234567'],
//     i = arr.join(', ');  // объединяет массив в строку

// console.log(arr);
// console.log(i);

// let arr = ["qwerty", 'asdfgh', 'ZXCVBN', '1234567'],
let arr = ["1", '15', '4', '2'],
/*
    i = arr.sort();         // сортирует массив*
                            // * A-Za-z0-9, при этом 1,15,2,4...
*/
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

// console.log(arr);
console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);











