'use strict';

//userFirstName - variable for user's name, type string
const userFirstName = 'Zakhar';

//userAge - variable for user's age, type number
const userAge = 18;

//isVerify - variable for user's age, type boolean
let isVerify = true;

//dateRegister - variable for date register, type string
let dateRegister = '2025-05-29';

//numberCard - variable for user's number card, type bigInt
const numberCard = 5253_5451_1234_1122n;

//promocode - variable for the case if user has a promo code, type string
let promocode = null;

//reserveName - variable for the case if the user has a reserve name, type undefined
let reserveName;

//bonus - variable for the case if the user has a bonus, type number
let bonus = 200;

console.log(`Користувач ${userFirstName}, вік ${userAge}, має бонусів: ${bonus}`);

console.log(`Верифікація: ${isVerify}. Промокод: ${promocode}.`);

console.log(`Резервне ім'я ${reserveName}, Дата реєстрації ${dateRegister}. Номер картки ${numberCard}`);

console.log("Користувач:", userFirstName, typeof userFirstName);

console.log("Вік:", userAge, typeof userAge);

console.log("Верифікація:", isVerify, typeof isVerify);

console.log("Дата реєстрації:", dateRegister, typeof dateRegister);

console.log("Номер картки користувача:", numberCard, typeof numberCard);

console.log("Промокод:", promocode, typeof promocode);

console.log("Резервне ім’я:", reserveName, typeof reserveName);

console.log("Бонуси:", bonus, typeof bonus);