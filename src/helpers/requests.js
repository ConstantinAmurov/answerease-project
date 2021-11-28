const axios = require('axios').default;

const API_ROOT = process.env.REACT_APP_DEV_API_URL;

export const request = (method, url, payload = null, headers = 1) => {
    let requestData = {
        method: method,
        url: API_ROOT + url
    };
    if (payload)
        requestData.data = payload;
    if (headers) {
        requestData.headers = headers;

    }
    if (headers === 1)
        requestData.headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
        };
    debugger;
    return axios(requestData);
};