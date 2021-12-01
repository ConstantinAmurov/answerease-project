import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

export const getQuestion = async (question_id) => {
    try {
        debugger;
        const { data } = await request('get', `${urls.GET_QUESTION}/?id=${question_id}`);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};

export const getQuestions = async (question_id) => {
    try {
        if (question_id) {
            const { data } = await request('get', `${urls.GET_QUESTIONS}/?id=${question_id}`);
            return data;

        }

        else {
            const { data } = await request('get', urls.GET_QUESTIONS);
            return data;
        }
    }
    catch (error) {
        throw Error(error);
    }
};
export const askQuestion = async (values) => {

    try {
        const { data } = await request('post', urls.ASK_QUESTION, values);
        return data;

    }
    catch (error) {
        throw Error(error);
    }


};

export const answerQuestion = async (values) => {
    try {
        debugger;
        const { data } = await request('post', urls.ANSWER_QUESTION, values);
        return data;

    }
    catch (error) {
        throw Error(error);
    }

};