'use strict';

const array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1.Знайти суму та кількість позитивних елементів.
const {sum, count} = array.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
        accumulator.sum += currentValue;
        accumulator.count++;
        return accumulator;

    } else {
        return accumulator;
    }
}, { sum: 0, count: 0 });

console.log("Сума позитивних елементів:", sum);
console.log("Кількість позитивних елементів:", count);

//2.Знайти мінімальний елемент масиву та його порядковий номер.
const {min, minIndex} = array.reduce((accumulator, currentValue, index) => {
    if ( accumulator.min > currentValue) {
        accumulator.min = currentValue;
        accumulator.minIndex = index;
        return accumulator;

    } else {
        return accumulator;
    }
}, { min: 0, minIndex: 0 });
console.log("Мінімальний елемент:", min);
console.log("Порядковий номер:", minIndex);

//3.Знайти максимальний елемент масиву та його порядковий номер.
const {max, maxIndex} = array.reduce((accumulator, currentValue, index) => {
    if ( accumulator.max < currentValue) {
        accumulator.max = currentValue;
        accumulator.maxIndex = index;
        return accumulator;

    } else {
        return accumulator;
    }
}, { max: 0, maxIndex: 0 });
console.log("Мінімальний елемент:", max);
console.log("Порядковий номер:", maxIndex);

//4.Визначити кількість негативних елементів.
const negativeCount = array.reduce((count, currentValue) => {
    if (currentValue < 0) {
        return ++count;
    } else {
        return count;
    }
},  0);

console.log("Кількість негативних елементів:", negativeCount);

//5.Знайти кількість непарних позитивних елементів.
const unpairedPositiveCount = array.reduce((count, currentValue) => {
    if (currentValue  > 0 && currentValue % 2 !== 0) {
        return ++count;
    } else {
        return count;
    }
},  0);

console.log("Кількість непарних позитивних елементів:", unpairedPositiveCount);

//6.Знайти кількість парних позитивних елементів.
const pairedPositiveCount = array.reduce((count, currentValue) => {
    if (currentValue > 0 && currentValue % 2 === 0) {
        return ++count;
    } else {
        return count;
    }
},  0);

console.log("Кількість непарних позитивних елементів:", pairedPositiveCount);

//7.Знайти суму парних позитивних елементів.
const pairedPositiveSum = array.reduce((sum, currentValue) => {
    if (currentValue  > 0 && currentValue % 2 === 0) {
        return sum + currentValue;
    } else {
        return sum;
    }
},  0);

console.log("Сума парних позитивних елементів:", pairedPositiveSum);

//8.Знайти суму непарних позитивних елементів.
const unpairedPositiveSum = array.reduce((sum, currentValue) => {
    if (currentValue  > 0 && currentValue % 2 !== 0) {
        return sum + currentValue;
    } else {
        return sum;
    }
},  0);

console.log("Сума непарних позитивних елементів:", unpairedPositiveSum);

//9.Знайти добуток позитивних елементів.
const positiveProduct = array.reduce((product, currentValue) => {
    if (currentValue  > 0) {
        return product * currentValue;
    } else {
        return product;
    }
},  1);

console.log("Добуток позитивних елементів:", positiveProduct);

//10.Знайти найбільший серед елементів масиву, остальні обнулити.
function processArray(arr) {

    const max = arr.reduce((acc, val) => Math.max(acc, val), -Infinity);

    const processedArr = arr.map(val => (val === max ? val : 0));

    return processedArr;
}

const result = processArray(array);
console.log(result);


