'use strict';

//2. Set: Виявлення унікальних обʼєктів без повторної обробки

const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

const filterUniqueByReference = (input) => {

    const mySet = new Set(input);
    return [...mySet];
}

const result1 = filterUniqueByReference(input);
//=> [obj1, obj2]

console.log(result1);