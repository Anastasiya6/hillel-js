'use strict';

const btn = document.querySelector('#toggle-theme');

console.log(btn);

btn.addEventListener("click", function (e) {
    document.body.classList.toggle('dark-theme');
});