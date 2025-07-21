'use strict';


function createModel() {

    const DB_KEY = 'product';
    const OBJECT_KEYS = ['title', 'description', 'price'];
    const validateObject = (objectToValidate) => {
        if(typeof objectToValidate !== 'object') return false;
        const keysToValidate = Object.keys(objectToValidate);

        let isValid = true;

        for(let i = 0; i < OBJECT_KEYS.length; i++) {

            if(!keysToValidate.includes(OBJECT_KEYS[i])) {
                isValid = false
                break
            }

        }
        return isValid;
    }
    const getData = () => {
        const data = JSON.parse(localStorage.getItem(DB_KEY));

        if(data === null) return [];
        return data;
    }
    const getDataById = (id) => {
        if(typeof id !== 'number') return null;
        const currentData = getData();
        console.log('currentData',currentData);
        const product = currentData.find((singleProduct) => id === singleProduct.id );
        console.log(product);
        if(!product) return null;

        return product;
        // const editContact = currentData.splice(userIndex, 1)[0];
        // localStorage.setItem(DB_KEY, JSON.stringify(currentData));

        //return removedContact;
    }
    const setData = (data,index=null) => {
        // Object validation
        if (!data) return null;
        if (typeof data !== "object") return null;
        if (!validateObject(data)) return null;
        console.log(data);
        // Getting data from localStorage
        const currentData = getData();
        console.log(index);
        let id = 1;
        if (!index) {    // Calculating ID
            console.log(id);

            if (currentData.length) {
                id = currentData.at(-1).id;
                id += 1
            }
            console.log(id);
        }else{
            id = index;
        }
        const dataToSave = {...data, id};
        // Saving data to localStorage
        if(index){
            currentData[index] = dataToSave;
        }else{


            currentData.push(dataToSave);
        }

        localStorage.setItem(DB_KEY, JSON.stringify(currentData));

        // Returning saved element
        return getData().at(-1)
    }
    const deleteData = (id) => {
        if(typeof id !== 'number') return null;
        const currentData = getData();

        const productIndex = currentData.findIndex((singleProduct) => id === singleProduct.id );

        if(productIndex === -1) return null;

        const removedContact = currentData.splice(productIndex, 1)[0];
        localStorage.setItem(DB_KEY, JSON.stringify(currentData));

        return removedContact;
    }

    return {
        getData,
        setData,
        deleteData,
        getDataById
    }
}

const dataBase = createModel();