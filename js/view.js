'use strict';

const createResultTemplate = (data) => {
    if(typeof data !== "object" || !Object.values(data).length) return null;
    const ul = document.createElement('ul');

    ul.classList.add('list-group','mb-3');

    for(const key in data){
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `<b>${key}:</b> ${data[key]}`;
        ul.append(li);
    }

    return ul;
}