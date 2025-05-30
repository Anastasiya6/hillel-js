'use strict';

const user = {
    name: "Nastya",
    age: 18,
    isOnline: true,
    friends: ["Kristi","Mark","Zoryana"],
    settings: {
        theme: "light",
        notifications: false
    }
}

const firstFriendName = user.friends[0];

const notificationsEnabled = user.settings.notifications;

console.log(`Ім’я користувача: ${user.name}\n` +
            `Кількість друзів: ${user.friends.length}\n` +
            `Ім’я першого друга: ${firstFriendName}\n` +
            `Яка тема увімкнена: ${user.settings.theme}\n` +
            `Чи ввімкнені сповіщення: ${notificationsEnabled ? 'так' : 'ні'}`);
