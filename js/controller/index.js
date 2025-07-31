'use strict';

const form = document.querySelector('#todoForm');

form.addEventListener('click',(event) => {
    console.log(event.target);
})
console.log(form);