function createBus() {
    const topics = Object.create(null); // { [topic]: Set<Function> }
    console.log(topics);
    function on(topic, handler) {
        // TODO: 1) Ініціалізувати контейнер підписників для topic
        //       2) Додати handler
        //       3) Повернути функцію відписки
    }

    function off(topic, handler) {
        // TODO: 1) Прибрати handler із теми
        //       2) Видалити тему, якщо підписників не залишилось
    }

    function emit(topic, payload, delay = 0) {
        // TODO: 1) Використати setTimeout з delay
        //       2) Усередині таймера викликати всіх підписників теми з payload
        //       3) Акуратно обійти ітерацію, якщо під час виклику відбудеться off()
    }

    return { on, off, emit };
}

createBus();