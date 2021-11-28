import { urls } from "../../helpers/urls";

const axios = require('axios').default;
axios.defaults.baseURL = "";
const API_ROOT = process.env.REACT_APP_DEV_API_URL;

const header = {
    grant_type: "password",
    client_id: 1,
    client_secret: "vbciEeMWla1ozFUEO617uESKxA6Xn7R87wtGd03b"
};

export const login = async (values) => {
    try {
        const { data } = await axios.post(API_ROOT + urls.LOGIN_URL, {
            ...values,
            grant_type: 'password',
            client_id: 1,
            client_secret: "hxFJI7x2ULPrUTBz28fn2a3hWvkx0pFqEfqFCr2W"
        }, { headers: header });
        return data;

    }
    catch (error) {
        throw Error(error);
    }
};

export const getLoggedInUser = () => { 
    
};