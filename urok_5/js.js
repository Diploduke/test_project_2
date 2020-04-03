'use strict'

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),  // возвращает все элементы указанного селектора
//   heart = document.querySelectorAll('.wrapper .heart'),   // Пример использования
    oneheart = document.querySelector('.heart'),    
    wrapper = document.querySelector('.wrapper');   // 

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart);
// console.log(heart[1]);
// console.log(oneheart);

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, heart_mass) {   // "Конфета", номер, сам массив
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document. createTextNode('Здесь был Вася');

div.classList.add('black');
// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h2>Hello World!</h2>';     // добавление текста без защиты
div. textContent = 'Hello World!';              // добавление ТОЛЬКО текста

document.body.insertBefore(div, circle[0]);     // Вставка
document.body.removeChild(circle[1]);           // Удаление
wrapper.removeChild(heart[1]);                  

document.body.replaceChild(btn[1], circle[1])   // Замена



console.log(div);
console.log(text);
