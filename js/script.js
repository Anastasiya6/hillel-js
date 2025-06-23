'use strict';

//-----//
const array1 = [2, 5, 9];

const indexOf = (array,searchElement,fromIndex = 0) => {

    let index = fromIndex;

    let arrayLength = array.length;

    if(index >= arrayLength) return -1;

    if(index < 0){
        index += arrayLength;
    }

    for(let i  = index; i < arrayLength; i++){
        if(array[i] === searchElement){
            return i;
        }
    }
    return -1;
}

console.log(indexOf(array1,2));

//-----//
const array2 = [2, 5, 9, 2];;
console.log(array2);

const lastIndexOf = (array,searchElement,fromIndex = array.length) => {

    let arrayLength = array.length;
    let index = 0;

    if(fromIndex >= arrayLength){
        index = arrayLength - 1
    }else if(fromIndex < 0){
        index = fromIndex + arrayLength;
    }else{
        index = fromIndex;
    }

    for(let i = index; i >= 0 ; i--){

        if(array[i] === searchElement){
            return i;
        }
    }

    return -1;
}

console.log(lastIndexOf(array2,2,-1));

//-----//
const array3 = [7, 4, 8, 12];

const find = (arr, cb) => {

    for(let i = 0; i < arr.length; i += 1) {
        if( cb(arr[i], i, arr) ) {
            return arr[i];
        }
    }
}

const filteredNumbers = find(array3, (item) => {
    let start = 2;

    while (start <= Math.sqrt(item)) {
        if (item % start++ < 1) {
            return false;
        }
    }
    return item > 1;

})

console.log(filteredNumbers);

//-----//
const array4 = [4, 5, 8, 12];

const findIndex = (arr, cb) => {

    for(let i = 0; i < arr.length; i += 1) {
        if( cb(arr[i], i, arr) ) {
            return i;
        }
    }
    return -1;
}

const findIndexFiltered = findIndex(array4, (item) => {
    let start = 2;

    while (start <= Math.sqrt(item)) {
        if (item % start++ < 1) {
            return false;
        }
    }
    return item > 1;

})

console.log(findIndexFiltered);

//-----//
const array5 = [1,0,,NaN];

const includes = (array,searchElement,fromIndex = 0) => {

    let arrayLength = array.length;
    let index = fromIndex??0;

    if(fromIndex >= arrayLength) {
        return false;
    }else if(fromIndex < -arrayLength || fromIndex === 0){
        index = 0;
    }else if(fromIndex < 0){
        index = fromIndex + array.length;
    }

    for(let i  = index; i < arrayLength; i++){
        if(sameValueZero(array[i], searchElement)){
            return true;
        }
    }

    return false;
}
function sameValueZero(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        // x и y равны (могут быть -0 и 0) или они оба равны NaN
        return x === y || (x !== x && y !== y);
    }
    return x === y;
}
console.log(includes(array5,NaN));

//-----//
const array6 = [7, 9, 5, 8, 12];

const every = (arr, cb) => {
    if (arr.length == 0) return false;

    for(let i = 0; i < arr.length; i += 1) {
        if( !cb(arr[i], i, arr) ) {
            return false;
        }
    }
    return true;
}

const everyFiltered = every(array6, (item) => {
    return item >= 6;
})

console.log(everyFiltered);

const array7 = [7, 9, 5, 8, 12];

const some = (arr, cb) => {
    if (arr.length == 0) return false;

    for(let i = 0; i < arr.length; i += 1) {
        if( cb(arr[i], i, arr) ) {
            return true;
        }
    }
    return false;
}

const someFiltered = some(array7, (item) => {
    console.log(item);
    return item >= 9;
})

console.log(someFiltered);