'use strict';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();


    const{target: currentForm} = event;

    //We should find all elements in current form the tag name is: input, textarea
    const inputs = currentForm.querySelectorAll('input, textarea');
    const formData = collectDataFromHTMLNodes(Array.from(inputs));
    if(formData === null) return;

    //Create html element for displaying data selected for the form above

    const resultTemplate = createResultTemplate(formData);
    const resultContainer = document.querySelector('[data-form-values]');
    resultContainer.prepend(resultTemplate);

    //Cleanup the form
    currentForm.reset();
})