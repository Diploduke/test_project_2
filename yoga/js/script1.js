window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),        // родительский табы
        info = document.querySelector('.info-header'),              // родительский ссылки
        tabContent = document.querySelectorAll('.info-tabcontent'); // табы

    function hideTabContent(a) {                        // скрывает все
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);  // Скрываются все табы, кроме первого


    function showTabContent(b) {                        // показывает какой-то определенный
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {    // обработчик с делегированием (на род. ссылок)
//        btnBlock.addEventListener('click', function(event) {
    //    let target = event.target;
        if (event.target && event.target.classList.contains('info-header-tab')) {
        // if (event.target && event.target.classList.contains('first'))
            for (let i = 0; i < tab.length; i++) {      // устанавливается продолжительность цикла
                if (event.target == tab[i]) {           // если "клик" на опред. ссылке
                    hideTabContent(0);                  // убирается 1-й
                    showTabContent(i);                  // показывается таб, соотв. ссылке
                    break;                              // прерывание цикла
                }
            }
        }
    });


    // Timer ============================================


    let deadLine = '2020-04-20';
//    let deadLine = '2020-03-12';  // Для проверки отрицательных значений

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // Разница в мс между
                                                              // deadLine и сейчас
            seconds = Math.floor((t/1000) % 60), // Только целые числа, мс,
                                                  // "% 60" - получаем остаток
                                                  // вычленяем кол-во целых минут и 
                                                  // берем остаток
            minutes = Math.floor((t/1000/60) % 60), // Аналогично для минут
            hours = Math.floor((t/(1000*60*60)));   // Получаем кол-во целых часов
            // hours2 = math.floor((t/1000/60) % 24),   // Если требуется получить дни
            // days = math.floor((t/(1000*60*60*24)));  // Получаем дни
            return {            // Для выведения из функции неск. переменных в return заносим объект
                'total' : t,    // Пригодится для остановки таймера при достижении нуля
                'hours' : hours,
                'minutes' : minutes, 
                'seconds' : seconds
            };
    }

    function addZero(num) {     // Добавляем нули, если число меньше 10
        num = String(num);
        if (num.length == 1) {
            num = '0' + num;
            return num;
         } else {
        return num; 
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);

                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);

                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                        hours.textContent = '00';
                        minutes.textContent = '00';
                        seconds.textContent = '00';
                    }
            }
     }

    setClock('timer', deadLine);

    // Модальное окно ==============================================

    let more = document.querySelector('.more'), // Кнопка "Узнать больше"
        overlay = document.querySelector('.overlay'),   // Модалка
        close = document.querySelector('.popup-close'),  // Крестик (закрыть)
        descriptionBtn = document.querySelectorAll('.description-btn'); // Кнопка "Узнать подробнее"


//    console.log(descriptionBtn[0]);


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


    // form ============================

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formContact = document.getElementById('form'),
        inputContact = formContact.getElementsByTagName('input'),
        statusMessageContact = document.createElement('div');

    statusMessage.classList.add('status');
    statusMessageContact.classList.add('status');
    statusMessageContact.style.color = '#fff';
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // --- Вариант 1, при помощи FormData
        // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // --- Вариант 2, при помощи JSON
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        // ------- Для JSON
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        })
        let json = JSON.stringify(obj);
        // ------- Для JSON

        // request.send(formData);  // Для FormData
        request.send(json);         // Для JSON

        request.addEventListener('readystatechange', function() {   // изменение состояния запроса
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });   

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

    });

    // form Контактная ============================

    formContact.addEventListener('submit', function(event) {
        event.preventDefault();
        formContact.appendChild(statusMessageContact);

        // console.log(formContact);
        // console.log(inputContact[0].value);
        // console.log(inputContact[1].value);

        let request1 = new XMLHttpRequest();
        request1.open('POST', 'server.php');
        request1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        let formData1 = new FormData(formContact);

        // console.log(formData1);

        request1.send(formData1);

        request1.addEventListener('readystatechange', function() {   // изменение состояния запроса
            if (request1.readyState < 4) {
                statusMessageContact.innerHTML = message.loading;
            } else if (request1.readyState === 4 && request1.status == 200) {
                statusMessageContact.innerHTML = message.success;
            } else {
                statusMessageContact.innerHTML = message.failure;
            }
        });   

        for (let i = 0; i < inputContact.length; i++) {
            inputContact[i].value = '';
        }

    });


});








