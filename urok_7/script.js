'use strict'

// ============ События на моб. устройствах  и Регулярки ============

// touchstart   // прикосновение (click работает)
// touchmove    // передвижение
// touchend     // окончание прикосновения
// touchenter   // заход на какой-либо элемент (при передвижении?)
// touchleave   // покинули элемент
// touchcancel  // прикосновение вышло за границы "события"


// window.addEventListener('DOMContentLoaded', function(){
//     let box = document.querySelector('.box');

/*
        box.addEventListener('touchstart', function(e){
        e.preventDefault();
        console.log('red box: touchstart');
        console.log(e.target);
        console.log(e.touches);             // все пальцы, кот. прикоснулись к экрану
        console.log(e.touches[0]);          // 1-й палец
        console.log(e.changedTouches);      // все пальцы, кот. взаимодействовали с объектом
        console.log(e.targetTouches);       // только те, кот. взаимодействуют с определ. элементом
    });
*/

    // box.addEventListener('touchmove', function(e){
    // e.preventDefault();
    // // console.log('red box: touchmove');
    // console.log('red box: ' + e.touches[0].pageX);  // Отслеживание по шкале X,
    //                                                 // может пригодиться для слайдера
    // });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log('red box: touchend');

    // });

// });

// ============ Регулярки ============

window.addEventListener('DOMContentLoaded', function(){
//    let box = document.querySelector('.box');

/*
        box.addEventListener('touchstart', function(e){
        e.preventDefault();
        console.log('red box: touchstart');
        console.log(e.target);
        console.log(e.touches);             // все пальцы, кот. прикоснулись к экрану
        console.log(e.touches[0]);          // 1-й палец
        console.log(e.changedTouches);      // все пальцы, кот. взаимодействовали с объектом
        console.log(e.targetTouches);       // только те, кот. взаимодействуют с определ. элементом
    });
*/

    // box.addEventListener('touchmove', function(e){
    // e.preventDefault();
    // // console.log('red box: touchmove');
    // console.log('red box: ' + e.touches[0].pageX);  // Отслеживание по шкале X,
    //                                                 // может пригодиться для слайдера
    // });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log('red box: touchend');

    // });

 //    new RegExp('pattern', 'flags');
 //   /pattern/

    // let ans = prompt('Введите ваше имя');
    // let ans = prompt('Введите число');


    // let reg = /n/g;
    // let reg = /n/ig;
    // let reg = /\d/g;

    // console.log(ans.search(reg));   // возвращает место (в виде числа) символа в строке
    // console.log(ans.match(reg));    // ищет совпадения
    // console.log(reg.test(ans));

    // console.log(ans.match(reg));
    

    // i    // флаг регистра (вне зависимости от регистра)
    // g    // флаг глобальности (количество вхождений, все, а не только первое)
    // m    // флаг многострочности

    // \d      // (digit) - цифры, \d - ищем число, \D - ищем НЕ число
    // \w      // (words) - слова, \w - ищем слова, \Ц - ищем НЕ слова
    // \s      // (spaces) - пробелы, \s - ищем слова, \S - ищем НЕ слова


// let pass = prompt('Введите пароль');

// console.log(pass.replace(/./g, "*"));   // замена
// alert('12-34-56'.replace(/-/g, ':'));

let str = 'My name is/ R2D2';

console.log(str.match(/\w\d\w\d/i));        // ищем слово/цифра/слово/цифра
console.log(str.match(/\//i));              // ищем "/"
console.log(str.match(/ /i));               // ищем пробел

 });