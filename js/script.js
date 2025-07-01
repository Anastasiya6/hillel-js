'use strict';

//Написати свою реалізацію функції apply
function apply(object, func, ...args){
    object.func = func;
    console.log(object.func(...args));
    delete object.func;
}

const getFullName = function(prefix = '', suffix = '') {
    return `${prefix} ${this.firstName} ${this.lastName} ${suffix}`;
}

const user = {
    firstName: 'John',
    lastName: 'Doe',
}

const student = {
    firstName: 'Alex',
    lastName: 'J'
}

const humane = {
    firstName: 'Marta',
    lastName: 'Lo'
}

const users = [user, student,humane];

users.forEach((item) => {
    apply(item, getFullName, 'MR.', '... PS. hello js');
});

//Написати свою реалізацію функції bind
const bind = function (object, func, ...args){
    return function() {
        return apply(object, func, ...args);
    }
}

const binded = bind(user, getFullName, 'Here bind','By');
binded();
