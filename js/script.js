'use strict';

//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let strNumbers  = 'Числа від 10 до 20 -';
const count = 20;
for(let i = 10; i <= count; i++){
    strNumbers += i;
    strNumbers += i == count ? '' : ',';
}

console.log(strNumbers);

//Вивести квадрати чисел від 10 до 20.
let strSquareNumbers = 'Квадрати чисел від 10 до 20 - ';

for(let i = 10; i <= count; i++){
    strSquareNumbers += i ** 2;
    strSquareNumbers += i == count ? '' : ',';
}

console.log(strSquareNumbers);

//Вивести таблицю множення на 7.
console.log('Таблиця множення на 7');
for(let i = 1; i <= 10; i++){
    console.log(`${i} * 7 = ${7 * i}`);
}

//Знайти суму всіх цілих чисел від 1 до 15.
let sumInt = 0;

for(let i = 1; i <= 15; i++){
    sumInt += i;
}
console.log('Cума всіх цілих чисел від 1 до 15 = ' + sumInt);

//Знайти добуток усіх цілих чисел від 15 до 35.
let productInt = 1;

for(let i = 15; i <= 35; i++){
    productInt *= i;
}
console.log('Добуток всіх цілих чисел від 15 до 35 = ' + productInt);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let avgInt = 0;

for(let i = 1; i <= 500; i++){
    avgInt += i;
}
console.log('Середнє арифметичне всіх цілих чисел від 1 до 500 = ' + avgInt/500);

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumPair = 0;

for(let i = 30; i <= 80; i++){
    sumPair += i % 2 == 0 ? i : 0;
}
console.log('Сума лише парних чисел в діапазоні від 30 до 80 = ' + sumPair);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let strNumbersMultiple  = 'Всі числа в діапазоні від 100 до 200 кратні 3 - ';

const countMultiple = 300;

for(let i = 100; i <= countMultiple; i++){
    strNumbersMultiple += i % 3 == 0 ? i + ' ' : '';
}

console.log(strNumbersMultiple);

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const n = 30;
let countDivisor = 0;
let sumDivisor = 0;
let strNumbersDivisor  = `Всі дільники числа ${n} - `;

for(let i = 0; i <= n; i++){
    if(n % i === 0){
        strNumbersDivisor += i + ' ';
        countDivisor++;
        sumDivisor += i % 2 == 0 ? i : 0;
    }
}

console.log(strNumbersDivisor);

//Визначити кількість його парних дільників.
console.log(`Кількість парних дільників числа ${n} -  ${countDivisor}`);

//Знайти суму його парних дільників.
console.log(`Сума парних дільників числа ${n} -  ${sumDivisor}`);

//Надрукувати повну таблицю множення від 1 до 10.
console.log(`Повна таблиця множення від 1 до 10`);
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}