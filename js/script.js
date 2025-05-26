'use strict';

const name = prompt('Please, enter your name');

if(name){
    const greeting = confirm('Want to see a greeting?');

    if(greeting){
        alert(`Hello, ${name}`);
    }
}
