'use strict';

function createDataBase() {
    const OBJECT_KEYS = ['firstName', 'lastName', 'phone'];
    //const DB = [];

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
        try {
            const data = localStorage.getItem("phonebook");
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error("Помилка при парсингу даних з localStorage:", error);
            return [];
        }
    }
    const setData = (data) => {

        // Object validation
        if(!data) return null;

        if(typeof data !== "object") return null;

        if(!validateObject(data)) return null;

        // Generate uniq ID
        let id = 1
        const currentData = getData();
        if(currentData.length > 0) {
            id = currentData[currentData.length-1].id + 1
        }

        // Save data to database;
        const dataToSave = {...data, id};
       // DB.push(dataToSave);

        currentData.push(dataToSave);
        localStorage.setItem("phonebook", JSON.stringify(currentData));
        // return saved element
        return currentData.at(-1);
    }
    const deleteData = (id) => {

        if(typeof id !== 'number') return null;
        const currentData = getData();
        const contactIndex = currentData.findIndex((currentData) => id === currentData.id );
        if(contactIndex === -1) return null;

        const removedData = currentData.splice(contactIndex, 1);
        localStorage.setItem('phonebook', JSON.stringify(currentData));
        if(!removedData.length) return null;
        return removedData[0];
    }


    return {
        getData,
        setData,
        deleteData,
    }
}

const dataBase = createDataBase();