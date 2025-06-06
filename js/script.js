'use strict';

const birthDate = prompt('Введи твій рік народження');

const city = prompt('Введи місто в якому проживаєте');

const sport = prompt('Введи ваш улюблений вид спорту');

const sportChampions = {'баскетбол': 'Майкл Джордан',
                        'футбол': 'Андрей Шевченко',
                        'теніс':'Роджер Федерер'};

const message = 'Шкода, що Ви не захотіли ввести ';

let birthDatePrint = message + 'свій вік\n';

let sportPrint = message + 'свій вид спорту\n';

if(birthDate){
    birthDatePrint = `Твій вік: ${birthDate}\n`;
}

if(sport){
    if(Object.hasOwn(sportChampions,sport)){
        sportPrint = `Круто! Хочеш стати як ${sportChampions[sport]}?`;
    }
}

let cityPrint = 'Ти живеш у столиці ';

switch (city) {
    case 'Київ':
        cityPrint += 'України\n';
        break;
    case 'Лондон':
        cityPrint += 'Англії\n';
        break;
    case 'Вашингтон':
        cityPrint += 'США\n';
        break;
    case null:
    case "":
        cityPrint = message + 'своє місто\n';
        break;
    default:
        cityPrint = `Ти живеш у місті ${city}\n`;
        break;
}

alert(birthDatePrint + cityPrint + sportPrint);