'use strict';

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function calc(elem) {
    elem.addEventListener('input', () => {
        return Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            // console.log(request);
            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    resolve()
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve()
                } else {
                    reject()
                }
            })
            request.send(elem);
            // console.log(elem);
            // return data;
        })
    })

    // console.log(data);
    calc({}) // postData(formData)
    .then(() => inputUsd.value = "Идет подсчет...")
    .then(() => {
        let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        })
    .catch(() => inputUsd.value = "Что-то пошло не так!")
}

calc(inputRub);
console.log(inputRub);
