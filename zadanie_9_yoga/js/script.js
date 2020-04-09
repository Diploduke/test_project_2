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


    let deadLine = '2020-04-12';
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



});








