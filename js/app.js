'use strict';

function createUserInterface() {

    const form = document.querySelector('[data-form]');

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));
    const list = document.querySelector('[data-list=phoneList]')
    list.addEventListener('click', ({target}) => {
        if(target.closest('[data-remove-contact]') === null) return;
        if(target.closest('[data-contact-id]') === null) return;
        const contactElement = target.closest('[data-contact-id]');

        const contactId = parseInt(contactElement.getAttribute('data-contact-id'));

        const removeContact = dataBase.deleteData(contactId);
        if(removeContact !== null) {
            removedContact(contactElement);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;

        // Get data from the form
        const data = inputs.reduce((acc, {name, value}) =>{
            acc[name] = value;
            return acc;
        }, {});


        target.reset()
        const newData = dataBase.setData(data)
        let wrapper = createWrapper(newData);
        list.prepend(wrapper);
    });

    const removedContact = (element) => {
        element.remove();
    }

    const createWrapper = (contact) => {
        const wrapper = document.createElement('li');
        wrapper.setAttribute('data-contact-id', contact.id);
        wrapper.className = 'list-group-item d-flex align-items-center justify-content-between';
        wrapper.innerHTML = `
                <div class="text-black"><b>${contact.firstName} ${contact.lastName}</b></div>
                <button class="btn btn-danger btn-sm" data-remove-contact>Delete</button>
                </div>
               `;
        return wrapper;
    }

    const renderContacts = () => {
        const data = dataBase.getData();

        data.forEach((contact) => {
            let wrapper = createWrapper(contact);
            list.prepend(wrapper);
        })
        form.reset();
    }

    const disabledHandler = (e) => {
        let isInputFilled = true;
        for(let i = 0; i < inputs.length; i++) {
            if(!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if(isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    renderContacts();
    form.addEventListener('input', disabledHandler)
}

createUserInterface()