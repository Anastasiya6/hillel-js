'use strict';

const userIds = [1, 2, 3, 4, 5];

const fetchUserData = (id) => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return fetch(url)
}

let result = {
    success: [],
    errors: []
};

const getUsersData = (data) => {

    const userIds = [...data];
    let promises = [];
    for(let i = 0; i < userIds.length; i++){

        let promise = fetchUserData(userIds[i])
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                result.success.push(data);
                return result;
            })
            .catch(error => {
                result.errors.push(error);
                return result;
            });
            promises.push(promise);
    }
    return Promise.allSettled(promises).then((promiseResults) => {
        for (const promiseResult of promiseResults) {
            if (promiseResult.status === 'rejected') {
                 return promiseResult.reason;
            }
            if (promiseResult.status === 'fulfilled') {
                return promiseResult.value;
            }
        }
    });
}

getUsersData(userIds).then((result) => {
   console.log("✅ Success:", result.success);
   console.log("❌ Errors:", result.errors);
});