'use strict';

function padString(str, number, defaultChar, isAddChar = true) {

    if(str.length > number){
        return str.substr(0,number);
    }

    const length = number - str.length;
    let newStr = '';

    for(let i = 0; i < length; i++) {
        newStr += defaultChar;
    }

    return isAddChar ? str + newStr : newStr + str;
}

const result1 = padString('hello', 8, '*') //поверне рядок hello***;
console.log(result1);

const result2 = padString('hello', 6, '*', false); //поверне рядок *hello
console.log(result2);

const result3 = padString('hello', 2);
console.log(result3);
