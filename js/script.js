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

const getUsersData = async (data) => {

    const userIds = [...data];
    for (let i = 0; i < userIds.length; i++) {
        try {
            let user = await fetchUserData(userIds[i]);
            result.success.push(await user.json());
        } catch (error) {
            result.success.push(error);
        }
    }
    return result;
}
getUsersData(userIds).then((result) => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});