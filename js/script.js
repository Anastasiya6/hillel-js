'use strict';

const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};

const result = [];

const findValuesByKey = (obj, targetKey) => {

    for(const key in obj){

        if(typeof obj[key] === 'object' && obj[key] !== null){
            findValuesByKey(obj[key], targetKey);
        }else{
            if(key === targetKey) {;
                result.push(obj[key]);
            }
        }
    }
    return result;
}

findValuesByKey(data, "id")
console.log(result);