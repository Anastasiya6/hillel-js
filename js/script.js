'use strict';

//функція повинна працювати аналогічно методу array.shift
const array1 = [1,2,'Hello',6];
console.log(array1);

const arrayShift = (array) => {

    for (let i = 1; i < array.length; i++) {
        array[i - 1] = array[i];
    }
    array.length =  array.length - 1;

    return array;
}

console.log(arrayShift(array1));

//функція повинна працювати аналогічно методу array.reverse
const array2 = [1,2,'Hello',6,7,'Cat'];

console.log(array2);

const arrayReverse = (array) => {

    let tmp = 0;

    for (let i = 0; i < array.length/2; i++) {

        if(i === array.length - 1 - i) break;

        tmp = array[i];

        array[i] = array[array.length - 1 - i];

        array[array.length - i - 1] = tmp;

    }

    return array;
}

console.log(arrayReverse(array2));