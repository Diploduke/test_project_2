'use strict'

// ============== Смотри картинку ==============

let box = document.querySelector('.box'),
    btn = document.querySelector('button');

// let width = box.clientWidth,
//     height = box.clientHeight;

// let width = box.offsetWidth,
//     height = box.offsetHeight;

// let width = box.scrollWidth,
//     height = box.scrollHeight;

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());   // Объект со всеми координатами
console.log(box.getBoundingClientRect().left);  // только выбранные

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

btn.addEventListener('click', function() {
//  box.style.height = height + 'px';
//    console.log(box.scrollTop);
    box.scrollTop = 0;
});

scrollBy(0, 200);   // Сдвигает страницу вниз на 200 px (x, y)
scrollTo(0, 200);   // Перемещение к опред. месту




