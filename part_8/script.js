'use strict'

// ============ setTimeout и setInterval ============

// setTimeout(sayHello, 3000);     // в миллисекундах

// let timerId = setTimeout(sayHello, 3000);    // числовой идентификатор таймера
// clearTimeout(timerId);                       // Для остановки таймера

// let timerId = setInterval(sayHello, 3000);      // Запуск (многократный) через опред.
// clearTimeout(timerId);                          //  промежуток времени

// function sayHello() {
// //    alert('Hello World!');
//     console.log('Hello World!');
// }

// Чтобы решить проблему, если функция выполняется дольше, чем установленный
// таймаут - используется "рекурсивная" функция (вызывающая саму себя)

// let timerId = setTimeout(function log() {
//     console.log('Hello!');
//     setTimeout(log, 2000);      // здесь функция вызывает саму себя
// })

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    // if (event.target && event.target.tagName == 'BUTTON') {
    // if (event.target && event.target.classList.contains('first')) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Hello!');
    }
});



