'use strict';

//На етапі компіляції js знаходить всі оголошення констант, змінних (var, let)
// та функцій і підіймає їх уверх - hoisting

// Якщо цикл знаходиться в глобальній області видимості, то змінна var також створюється в глобальній
// області видимості. Hoisting підіймає змінну var вгору файлу й оголошує змінну
// В даному випадку вгорі файлу буде var varVariable зі значенням undefined.
//var varVariable = 'undefined'

//При використанні let всередині циклу, змінна має блочну область видимості.
// Тобто вона існує тілько всередині блока коду, в якому вона була оголошена
//Hoisting підіймає змінну let вгору файлу й оголошує змінну
//Але змінна знаходиться в Temporal Dead Zone (TDZ), тому ми не можемо отримати доступ до змінної до її оголошення
//Теж саме і для змінної const


function n (){
    console.log(this);
    return 1;
}
window.n();
for (let i = 0; i < 1; i++) {
    var varVariable = 7;
    let letVariable = 3;
    const constVariable = 'Friday';
    console.log('constVariable in cycle = ', constVariable);    //constVariable in cycle =  Monday
}
console.log('varVariable = ',varVariable);  //varVariable =  7
console.log('letVariable = ',letVariable);  //Uncaught ReferenceError: letVariable is not defined
console.log('constVariable = ', constVariable);//Uncaught ReferenceError: constVariable is not defined
