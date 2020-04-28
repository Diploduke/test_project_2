'use strict';

function modal() {
    
    // Модальное окно ==============================================

    let more = document.querySelector('.more'), // Кнопка "Узнать больше"
        overlay = document.querySelector('.overlay'),   // Модалка
        close = document.querySelector('.popup-close'),  // Крестик (закрыть)
        descriptionBtn = document.querySelectorAll('.description-btn'); // Кнопка "Узнать подробнее"
    //  console.log(descriptionBtn[0]);

    function vyzovmodal(btnVyzov) {
        btnVyzov.addEventListener('click', function() { // Событие на кнопку вызова
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';    // запрет прокуртки страницы
        });
    }

    for (let i = 0; i < 4; i++) {
        vyzovmodal(descriptionBtn[i]);
    }

    more.addEventListener('click', function() { // Событие на кнопку "Узнать больше"
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';    // запрет прокуртки страницы
        });

    close.addEventListener('click', function() { // Закрываем крестиком
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';       // Возвращаем прокрутку
    });

}

module.exports = modal;
