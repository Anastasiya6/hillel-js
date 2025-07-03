'use strict';

const select = document.querySelector('#filter');

const div = document.querySelectorAll('.card');

select.addEventListener('change', function(event) {

    const selectedValue = event.target.value;

    for(const elem of div){

        if(selectedValue === 'all' || selectedValue === elem.getAttribute('data-category') ){
            elem.style.visibility = 'visible';
        }else{
            elem.style.visibility = 'hidden';
        }
    }
});