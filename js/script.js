'use strict';

const userName = prompt('Як тебе звати');

const userAge = Number(prompt('Скільки тобі років?'));

const wantsNotifications = confirm('Чи хочете отримувати сповіщення?');

let nickname;

const session = {
    userName: userName,
    userAge: userAge,
    wantsNotifications: wantsNotifications,
    userId:  1234567890123456789n,
    lastLogin: null,
    nickname: nickname,
    favoriteTech: ['JS','HTML','CSS'],
    settings: {
        theme: "dark",
        autoLogin: false
    }
}

alert(`Привіт, ${session.userName}! Ваш ID: ${session.userId}`);
console.log(session);

console.log("Ім'я:", session.userName,typeof session.userName);
console.log("Вік:", session.userAge,typeof session.userAge);
console.log("Чи хоче користувач отримувати сповіщення:", wantsNotifications,typeof session.wantsNotifications);
console.log("ID користувача:",session.userId, typeof session.userId);
console.log("Нік:", session.nickname, typeof session.nickname);
console.log("Технології:", session.favoriteTech, typeof session.favoriteTech);
console.log("Тема:", session.settings.theme, typeof session.settings.theme);
console.log("Автологін:", session.settings.autoLogin, typeof session.settings.autoLogin);