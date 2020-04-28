'use strict';

let myModule = require('./script');    // Импортируем модуль

let newModule = new myModule();

console.log(newModule.hello());
console.log(newModule.goodbye());




