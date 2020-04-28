'use strict';

// ================== jQuery ====================

$(document).ready(function() {
    $('.list-item:first').hover(function() {    // Получаем 1-ю кнопку при наведении
        $(this).toggleClass('active');          // Добавляем в класс "active"
    });

    $('.list-item:eq(2)').on('click', function() {    // Получаем 3-ю кнопку при наведении
        $('.image:even').fadeToggle('slow');          // Добавляем эффект анимации
    });

    $('.list-item:eq(4)').on('click', function() {    // Получаем 5-ю кнопку при наведении
        $('.image:odd').animate(
            {   // Добавляем собственную анимации
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );          
    });
});

// --- Сравниваем с обычным JS -------------

// document.querySelectorAll('.list-item').forEach();
// .classlist
// .addEventListener
// $.ajax - fetch
// animations 


