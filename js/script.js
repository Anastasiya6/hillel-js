'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const abs = (arr) => {

    if(isEmptyArray(arr))
        return 'Array is empty';

    const results = [];

    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i] > 0){
            results.push(arr[i]);
        }
    }

    if(isEmptyArray(results))
        return null;

    return results;
}

const isEmptyArray = (arr) => {
    if(arr.length === 0)
        return true;
    return false;
}
console.log(abs(arr));