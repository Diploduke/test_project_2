'use strict';

function forma() {

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

}

module.exports = forma;