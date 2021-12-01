import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const addThank = async (values) => {
    try {
        debugger;
        const { data } = await request('post', urls.ADD_THANK, values);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};

export const deleteThank = async (values) => {
    try {
        const { data } = await request('post', urls.DELETE_THANK, values);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};