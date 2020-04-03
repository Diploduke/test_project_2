'use strict'

let menuItems = document.querySelector('.menu'),
    menuMain = document.getElementsByClassName('menu-item'),
    title1 = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('adv'),
    divPrompt = document.getElementById('prompt');

// console.log(menuMain);
// console.log(menuItems);
// console.log(menuMain[0]);
// console.log(title1);
// console.log(column);
// console.log(column[1]);
// console.log(adv[0]);

menuItems.insertBefore(menuMain[2], menuMain[1]);

let li5 = document.createElement('li');
li5.classList.add('menu-item');
li5.innerHTML = 'Пятый';
menuItems.appendChild(li5);

document.body.style.background = 'url(img/apple_true.jpg)';

title1.textContent = 'Мы продаем только подлинную технику Apple';

let column1 = column[1];
column1.removeChild(adv[0]);

let divPrompt1 = prompt("Ваше отношение к технике apple?", "");
if ( typeof(divPrompt1) === 'null' || divPrompt1 === '' ) {
    divPrompt1 = 'Отношение к технике apple не определено.';
}

if ( (typeof(divPrompt1)) === 'string' && (typeof(divPrompt1)) != null 
        && divPrompt1 != '' &&  divPrompt1.length < 50 ) {
        console.log("Все получилось!");
    } else {
        divPrompt1 = 'Отношение к технике apple не определено.';
    }

// console.log(divPrompt); 
console.log(divPrompt1);

divPrompt.innerHTML = divPrompt1;


// document.getElementsByClassName('adv').remove();

// let column1 = column[1];

// column1.removeChild(adv);

// document.body.column1.removeChild(adv); 

// document.body.column1.removeChild(adv);           // Удаление
// column1.removeChild(adv);
/*
node.removeChild( child );
oldСhild - Node (содержит ссылку на удаленный дочерний узел oldChild === child)
node - Node (родительский элемент из которого удаляется дочерний узел)
child - Node
*/
 // document.body.column1.removeChild(adv);
// document.body.column.removeChild(adv);

/*
  let li5 = document.createElement('li');
  li5.innerHTML = 'append';
  menuItems.append(li5);
*/