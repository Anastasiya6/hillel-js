'use strict';

function createUI() {

    const createTemplate = ({id, title, description, price}) => {
        const wrapper = document.createElement('tr');
        wrapper.setAttribute('data-product-id', id)

        const content = `
                          <th scope="row">${id}</th>
                          <td>${title}</td>
                          <td>${description}</td>
                          <td>${price}</td>
                          <td>
                            <div class="d-flex justify-content-end gap-1">
                              <button class="btn btn-primary" data-edit-product>Edit</button>
                              <button type="button" class="btn btn-danger" data-remove-product>Delete</button>
                            </div>
                          </td>
         `.trim();

        wrapper.innerHTML = content;
        return wrapper;
    }

    const renderContact = (template) => {
        if(!(template instanceof HTMLElement)) return null;

        const productsList = document.querySelector(`[data-product-list] tbody`);
        productsList.prepend(template)
    }
    const removeContact = (elementToRemove) => {
        elementToRemove.remove();
    }

    return {
        createTemplate,
        renderContact,
        removeContact
    }

}

const ui = createUI();