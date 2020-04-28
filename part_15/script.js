'use strict';

// $('.message a').click(function(){
//     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
//  });

// ================== localStorage ====================
/*
localStorage.setItem('number', 1);  // Записываем ключ / значение

console.log(localStorage.getItem('number'));    // Получаем значение (по ключу)

localStorage.removeItem('number');  // Удаление

localStorage.clear();               // Очистка полностью
*/
// ----------------------------

window.addEventListener('DOMContentLoaded', function() {
    let checkbox = document.getElementById ('checkbox'),
        changeForm = document.getElementById ('changeForm'),
        formDiv = document.querySelector('.form');

    if(localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }

    if(localStorage.getItem('bg') === 'changed') {
        formDiv.style.backgroundColor = '#bbb'; 
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

    changeForm.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        formDiv.style.backgroundColor = '#bbb';
    });

    let persone = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serializedPersone = JSON.stringify(persone);    // Сериализация данных, чтобы 
    localStorage.setItem('Alex', serializedPersone);    // импортировать в localStorage

    console.log(JSON.parse(localStorage.getItem('Alex')));

});

// ================== Работа с ошибками ====================

let json = '{"id":2}';

try {                       // Работает, пока нет ошибки
    let user = JSON.parse(json);
    // let user = JSON.parse(data);
    console.log(user);

    if (!user.name) {
        throw new Error('В данных нет имени!')
    }

    console.log('Начинаем работу');
    console.log(a);
    console.log('Продолжение работы');
} catch(error) {            // Включается после первой ошибки
    console.log(error);     // Полное описание
    console.log(error.name);    // Имя
    console.log(error.message); // Описание
    console.log(error.stack);   // Вызов, который привел к ошибке

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {                 // Необязательная секция
    console.log(`А я выполнюсь!`);
}

console.log('Работать дальше');





