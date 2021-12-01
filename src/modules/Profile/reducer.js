import {
    USER_ERROR,
    USER_SUCCESS,
    USER_REQUESTING
} from "./actions";

// The initial state of the Profile Reducer
export const initialState = {
    user: undefined,
    requesting: false,
    successful: false,
    messages: [],
    errors: null,
};

export default function userReducer(state = initialState, actions) {
    switch (actions.type) {
        case USER_REQUESTING: {
            return {
                ...state,
                requesting: true
            };
        }
        case USER_SUCCESS:
            return { ...state, requesting: false, successful: true, user: actions.payload, errors: null };
        case USER_ERROR:
            return {
                ...state,
                successful: false,
                requesting: false,
                errors: { ...actions.error },
            };

        default:
            return state;
    }
}
