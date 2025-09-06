ЗАДАЧА: Імітація подій через setTimeout із підпискою (pub/sub) — без Promises та async/await

Мета: реалізувати найпростішу подійну шину (Event Bus) у браузері, яка вміє підписуватися на події, відписуватися та емісити події асинхронно через setTimeout.

Обмеження:

Лише браузерний JavaScript.
Заборонено: Promises, async/await, сторонні бібліотеки.
Дозволено: setTimeout, DOM-події для ручної перевірки.
Інтерфейс, який потрібно реалізувати:

on(topic: string, handler: (payload:any) => void): () => void — підписка, повертає функцію відписки.
emit(topic: string, payload?: any, delay = 0): void — асинхронна емісія через setTimeout із вказаною затримкою.
off(topic: string, handler: Function): void — відписка. 
