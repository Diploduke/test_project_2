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
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formContact = document.getElementById('form');

    statusMessage.classList.add('status');
    
    function sendForm(elem) {   // 1-form; 2-formContact
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    request.addEventListener('readystatechange', function() {   // изменение состояния запроса
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    })
                    request.send(data);
                })

            }
            
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            
            postData(formData)
                .then(() => {
                    statusMessage.innerHTML = message.loading;
                    // console.log(message.loading);
                })
                .then(() => {
                    statusMessage.innerHTML = message.success;
                    // console.log(message.success);
                    clearInput();
                })
                .catch(() => {
                    statusMessage.innerHTML = message.failure;
                    // console.log(message.failure);
                    clearInput();
                })

        });
    }

    sendForm(form);
    sendForm(formContact); 


});








