'use strict';

//  ========================= ES5 vs ES6 ======================

let name = 'Ivan',
    age = 30, 
    mail = '123@mail.ru';

document.write('Пользователю ' + name + ' ' + age + ' лет. Почта: ' + mail); // ES5
document.write(`<br>Пользователю ${name} ${age} лет. Почта:  ${mail}`); // ES6 Интерполяция

function makeArr() {
    var items = [];

    // for (var i = 0; i < 10; i++) {
    //     var item = function() { 
    //         console.log(i);         // Выводится только "10"
    //     };
    //     items.push(item);
    // }
    for (let i = 0; i < 10; i++) {
        var item = function() { 
            console.log(i);         // Выводятся 1-10 (за счет let)
        };
        items.push(item);
    }

    return items;
}

// console.log(items);

var arr = makeArr();

// console.log(arr);


arr[1]();
arr[3]();
arr[7]();

// =========== Стрелочные функции ==========

let fun = () => {           // 1) Стрелочная функция анонимна (м.б. только внутри переменной)
    console.log(this);      // 2) Не работает с обработчиками событий
};                          // не может вызывать саму себя

// fun();

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);  // "Вложенный" this работает, т.к. у стрелочной нет
        };                      // своего контекста. Здесь контекст берется у родителя.
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

// function calcOrDouble(number, basis) {  // Либо считает, либо умножает на 2
    // basis = basis || 2;                 // ES5
    function calcOrDouble(number, basis = 2) {  // ES6
    
    console.log(number * basis);
}

calcOrDouble(3,5);
calcOrDouble(6);

// =========== Классы ==========

class Rectangle {
    // constructor(height, width) {
        constructor(height, width = 20) { // на случай, если не объявлено 2-е значение
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

// const square = new Rectangle(10, 10); // Объявлены 2 значения
const square = new Rectangle(10);        // 2-е значение не объявлено


console.log(square.calcArea());

// =========== Spread/Rest ==========

let video = ['youtube', 'vimeo', 'rutube'], 
    blogs = ['wordpress', 'livejournal', 'blogger'], 
    internet = [...video, ...blogs, 'vk', 'facebook']; // "..." - Spread (Оператор
                                                       // разворачивания)
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let numbers = [2, 5, 7];

log(...numbers);



