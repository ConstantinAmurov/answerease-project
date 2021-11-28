

export const USER_REQUESTING= "USER_REQUESTING";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";



export function getUserRequest() {
    return {
        type: USER_REQUESTING,
    };
}

export function getUserError(error) {
    return {
        type: USER_ERROR,
        error,
    };
}

export function getUserSuccess(payload) {
    return {
        type: USER_SUCCESS,
        payload
    };
}
