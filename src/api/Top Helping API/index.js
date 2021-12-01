import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const getTopHelping = async () => {

    
    try {
        const { data } = await request('get', urls.GET_TOP_HELPING);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};