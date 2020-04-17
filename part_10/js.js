'use strict';

let age = document.getElementById('age');
// console.log(age);
// console.log(age.value);
// console.log(this.value);
function showUser(surname, name) {
// alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
// console.log(this);
// console.log(this.value);
console.log("Пользователь " + surname + " " + name + ", его возраст " + age.value);
}

showUser('Smith', 'John');
// showUser('Black', 'Alex');






