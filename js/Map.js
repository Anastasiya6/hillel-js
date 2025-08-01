'use strict';

//1. Map: Статистика обʼєктів за складними ключами

const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
];

const groupByCategory = (arrayObject) => {
    const CategoryMap = new Map();

    for(const el of arrayObject){
        if(el.category && el.category.name) {
            let name = el.category;
            if (!CategoryMap.has(name)) {
                CategoryMap.set(name, []);
            }
            CategoryMap.get(name).push(el);
        }
    }
    return CategoryMap;
}
const result = groupByCategory(items);
console.log(result);
// Map {
//     electronics => [ { name: 'Laptop', ... }, { name: 'Phone', ... } ],
//         books => [ { name: 'Book A', ... } ]
// }