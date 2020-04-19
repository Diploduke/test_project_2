'use strict';

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function shoot() {
        let request = new XMLHttpRequest();
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        let promise = new Promise (function(resolve, reject) {
            request.onload = function() {
                console.log('Статус: Запуск');
                if (request.readyState === 4 && request.status == 200) {
                    let data = JSON.parse(request.response);
                    // console.log(data.usd);
                    resolve(data);
                } else {
                    reject();
                }
            }
        })
    promise
        .then((data) => {
            console.log(`Текущий курс: ${data.usd}`)
            console.log((inputRub.value / data.usd).toFixed(2))
            inputUsd.value = (inputRub.value / data.usd).toFixed(2)
        })
        .catch(() => {
            console.log(`Что-то пошло не так!`)
            inputUsd.value = "Что-то пошло не так!"
        })
    }
    shoot();
});
