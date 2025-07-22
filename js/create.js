'use strict';

function createProduct() {
    // Handle form events
    const form = document.querySelector('[data-form]');

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));

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
        dataBase.setData(data);
        window.location.href = 'index.html';

    });
    const disabledHandler = (e) => {
        let isInputFilled = true;
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if (isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    form.addEventListener('input', disabledHandler);
}
createProduct();


