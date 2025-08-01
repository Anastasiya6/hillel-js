'use strict';

//3. WeakMap: Привʼязка метаданих до обʼєктів без витоку памʼяті

function createMetadataStorage(){
    let wm = new WeakMap();

    const setMetadata = (obj,value) => {
        wm.set(obj,value);
    };
    const getMetadata = (obj) => {
        return wm.get(obj);
    };
    const hasMetadata = (obj) => {
        return wm.has(obj);
    };

    return {
        setMetadata,
        getMetadata,
        hasMetadata
    };
}

const storage = createMetadataStorage();

const user1 = { name: "Анна" };
const user2 = { name: "Олег" };

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

console.log(storage.getMetadata(user1)); // { role: "admin" }
console.log(storage.hasMetadata(user2)); // true