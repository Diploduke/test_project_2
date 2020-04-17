'use strict'

// let btn = document.getElementsByTagName('button'),
let btn = document.querySelectorAll('button'),
wrap = document.querySelector('.wrapper'),
link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('Нажата кнопка 1');
// }

// btn[0].addEventListener('click', function() {
//     alert('Нажата кнопка 1');
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('Мышь наведена на кнопку 1');
// });

// btn[0].addEventListener('click', function(event) {
//     // console.log(event);
//     // let target = event.target;
//     // target.style.display = 'none';  // Кнопка исчезает
//     console.log('Произошло событие1: ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function() {
//     console.log('Произошло событие2: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие3: ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Вышли!');  
    })
});


