import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const searchQuestion = async (value) => {
    try {  
        const { data } = await request('get', `${urls.SEARCH}/?key=${value}`);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};