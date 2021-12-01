import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const getCategories = async () => {
    try {
        const { data } = await request('get', urls.GET_CATEGORIES);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};