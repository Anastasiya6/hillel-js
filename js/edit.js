'use strict';

console.log(dataBase.getData());
function createProduct() {
    const form = document.querySelector('[data-form]');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;
        const inputs = Array.from(form.querySelectorAll('input'));
        // Get data from the form
        const data = inputs.reduce((acc, {name, value}) =>{
            acc[name] = value;
            return acc;
        }, {});

        saveProduct(data);
        console.log(data);
        console.log(data.title);
        target.reset()
        window.location.href = 'index.html';

        // const savedContact = dataBase.setData(data);
        // const template = ui.createTemplate(savedContact);
        // ui.renderContact(template);
    });
}

createProduct();

function saveProduct(data) {
    localStorage.setItem("product", JSON.stringify(data));

}

// const collectDataFromHTMLNodes = (fieldArr) => {
//     if(!Array.isArray(fieldArr)) return null;
//     const isValidNode = fieldArr.every((potentialInput) => {
//         if(potentialInput instanceof HTMLInputElement) return true;
//         if(potentialInput instanceof HTMLTextAreaElement) return true;
//         return false;
//     })
//
//     if(!isValidNode) return null;
//
//     const results = fieldArr.reduce((acc, {name, value}) => {
//         if(value.trim() !== '') acc[name] = value;
//         return acc;
//     }, {})
//
//     return Object.values(results).length ? results : null;
// }



