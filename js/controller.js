'use strict';

function createController() {
    console.log('dd');
    // Render elements in contacts list
    document.addEventListener('DOMContentLoaded', () => {
        const products = dataBase.getData();
        console.log(products);
        products.forEach(product => {
            const template = ui.createTemplate(product);
            ui.renderContact(template);
        })
    });

    // Deleting contact
    const deleteProductHandler = ({target}) => {
        if(target.closest('[data-remove-product]') === null) return;
        const productElement = target.closest('[data-product-id]');
        const productId = Number(productElement.getAttribute('data-product-id'));

        const removedElement = dataBase.deleteData(productId)
        if(removedElement !== null) {
            ui.removeContact(productElement)
        }
    }

    const editProductHandler = ({target}) => {
        if(target.closest('[data-edit-product]') === null) return;

        const productElement = target.closest('[data-product-id]');
        const productId = productElement.getAttribute('data-product-id');
        localStorage.setItem('selectedProductID',productId);
        window.location.href = 'edit.html';
    }

    const productsList = document.querySelector(`[data-product-list]`);

    productsList.addEventListener('click', deleteProductHandler);

    productsList.addEventListener('click', editProductHandler);
}

createController()