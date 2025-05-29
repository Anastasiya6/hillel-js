'use strict';

const userName = prompt('Please, enter your name');

let userAge = Number(prompt('Please, enter your age'));

let isAgreeParticipate = confirm('Do you agree to participate?');

const userId = 12345678901234567890n;

let bonusCode = null;

let secondName;

alert(`Привіт, ${userName}!\n` +
    `Твій вік: ${userAge}\n` +
    `Твій статус: ${isAgreeParticipate? 'участь підтверджено' : 'відмовився'}`);

console.log("Ім'я:", userName, typeof userName);
console.log("Вік:", userAge, typeof userAge);
console.log("Cтатус:", isAgreeParticipate, typeof isAgreeParticipate);
console.log("ID користувача:", userId, typeof userId);
console.log("Бонуси:", bonusCode, typeof bonusCode);
console.log("Резервне ім'я:", secondName, typeof secondName);