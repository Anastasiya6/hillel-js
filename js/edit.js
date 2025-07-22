'use strict';

function editProduct() {
    // Handle form events
    const form = document.querySelector('[data-form]');

    const inputs = Array.from(form.querySelectorAll('input'));

    const selectedProductID = localStorage.getItem('selectedProductID');
    let product = dataBase.getDataById(Number(selectedProductID));

    inputs.forEach(input => {
        const name = input.name;

        if (product.hasOwnProperty(name)) {
            input.value = product[name];
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;

        // Get data from the form
        const data = inputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {});

        target.reset()

        dataBase.setData(data, product);
        window.location.href = 'index.html';
    });

}

editProduct();
