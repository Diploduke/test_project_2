'use strict';

function shoot(drink) {
    let promise = new Promise((resolve, reject) => {
        console.log('Статус: Запуск');
        setTimeout(() => {
            if (drink === 0) {
                resolve()
            } else if (drink === 1) {
                resolve()
            } else {
                reject()
            }
        }, 1000);

    });
    promise
    .then(() => console.log('Успешно'))
    .then(() => console.log('Умеренно'))
    .catch(() => console.log('Не вышло'))
}

shoot(2);
