'use strict';

//Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = ['a',-3,4,'c',5,'/'];

const getAvg = (array) => {

    let avg = 0;
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === "number"){
            avg += array[i];
            count++;
        }
    }
    return avg/count;
}

console.log(getAvg(array));

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

const  doMath = (x, znak, y) => {
    if(typeof x !== 'number' || isNaN(x) || !isFinite(x)) {
        throw new Error('x should be a valid number')
    }
    if(typeof y !== 'number' || isNaN(y) || !isFinite(y)) {
        throw new Error('y should be a valid number')
    }
    switch (znak){
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return y == 0 ? 'Ділення на нуль' : x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
        default:
            return 'Unknown symbol';
    }
}

const x = +prompt("Введіть перше число:");
const znak = prompt("Введіть знак");
const y = +prompt("Введіть друге число:");
alert(doMath(x, znak, y));

//Написати функцію заповнення даними користувача двомірного масиву.
//Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

const fillDataUser = () => {

    const length1 = +prompt("Введіть довжину основного масива:");
    if(!checkLength(length1)) return null;

    const length2 = +prompt("Введіть довжину внутрішніх масивів:");
    if(!checkLength(length2)) return null;

    let arrayUser = [];
    let item = '';

    for(let i = 0; i < length1; i++){

        arrayUser[i] = [];

        for(let j = 0; j < length2; j++){
            item = prompt(`Введіть ${j+1} елемент масиву ${i+1} рядка`);
            arrayUser[i][j] = item;
        }
    }
    return arrayUser;
}

const checkLength = (length) => {
    if(typeof length !== 'number' || isNaN(length) || !isFinite(length)) {
        alert('Довжина масива повинна бути числом');
        return false;
    }
    return true;
}

console.log(fillDataUser());

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

const removeSymbol = (str,arraySymbols) => {

    if(typeof str !== 'string') throw new Error('str should have a string type');
    if (!Array.isArray(arraySymbols)) throw new Error('arraySymbols повинен бути масивом');

    let strNew = '';

    for(const item of str){
        if(!arraySymbols.includes(item)){
            strNew += item;
        }
    }
    return strNew;
}
const inputStr = prompt("Введіть рядок:");
const inputChars = prompt("Введіть символи для видалення").split('');

alert(removeSymbol(inputStr, inputChars));