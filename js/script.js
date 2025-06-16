'use strict';

function padString(str, number, defaultChar, isAddChar = true) {

    let messageError = '';
    const strLength = str.length;

    switch (arguments.length) {
        case 0:
            messageError += 'Не передано аргументів.';
            break;
        case 1:
            messageError += 'Не передано другий аргумент - число. ';
        case 2:
            messageError += 'Не передано третій аргумент - символ.';
    }
    if(strLength > number){
        return str.substr(0,number);
    }

    if(messageError){
       return messageError;
    }

    const length = number -strLength;
    let newStr = '';

    for(let i = 0; i < length; i++) {
        newStr += defaultChar;
    }

    return isAddChar ? str + newStr : newStr + str;
}
const result = padString('');
console.log(result);

const result1 = padString('hello', 8, '*') //поверне рядок hello***;
console.log(result1);

const result2 = padString('hello', 6, '*', false); //поверне рядок *hello
console.log(result2);

const result3 = padString('hello', 2);
console.log(result3);
