'use strict';

//  ========================= Promise ======================

// let btn = document.getElementById('btn1');

// btn.addEventListener('click', function() {
//     alert('Что-то произошло');
// })

// let func1 = function(param, func2) {
//     func2(function(param, func3) {
//         func3(function(param, func4) {
//             func4(function(param, func5) {

//             })
//         })
//     })
// }

// ------- без промисов ------------

// let drink = 0;

// function shoot(arrow, headshot, fail) {
//     console.log('Вы сделали выстрел...');

//     setTimeout(function() {
//         Math.random() > .5 ? headshot({}) : fail('Промахнулись');
//     }, 3000)
// };

// function win() {
//     console.log('Победили!');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log('Вам купили пиво!')
// }

// function giveMoney() {
//     console.log('Вам заплатили!')
// }

// function loose() {
//     console.log('Проиграли!')
// }

// shoot({}, 
//         function(mark) {
//             console.log('Попали в цель!');
//             win(mark, buyBeer, giveMoney);
//         },
//         function(miss) {
//             console.error(miss);
//             loose()
//         }
//     )

    // ------- конец без промисов ------------

let drink = 0;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Промахнулись');
        }, 3000)
    })

    return promise;
    
};

function win() {
    console.log('Победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво!')
}

function giveMoney() {
    console.log('Вам заплатили!')
}

function loose() {
    console.log('Проиграли!')
}

shoot({})
    .then(mark => console.log('Попали в цель!'))
    .then(win)
    .catch(loose)











