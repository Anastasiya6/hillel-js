'use strict';

const collectDataFromHTMLNodes = (fieldArr) => {
    if(!Array.isArray(fieldArr)) return null;
    const isValidNode = fieldArr.every((potentialInput) => {
        if(potentialInput instanceof HTMLInputElement) return true;
        if(potentialInput instanceof HTMLTextAreaElement) return true;
        return false;
    })

    if(!isValidNode) return null;

    const results = fieldArr.reduce((acc, {name, value}) => {
        if(value.trim() !== '') acc[name] = value;
        return acc;
    }, {})

    return Object.values(results).length ? results : null;
}


