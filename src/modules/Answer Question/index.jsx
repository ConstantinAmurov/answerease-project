import React from "react";
import AnswerForm from "./AnswerForm";
import { useParams } from "react-router";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getQuestion, answerQuestion } from "api/Questions API";
import Spinner from "components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import {
  successNotification,
  errorNotification,
} from "components/Notifications/actions";
import { getUserRequest } from "modules/Profile/actions";
const AnswerQuestion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isSuccess, isLoading } = useQuery(["question", id], () =>
    getQuestion(id)
  );
  const { mutate } = useMutation(answerQuestion);
  const queryClient = useQueryClient();
  const onSubmit = (values) => {
    mutate(
      { ...values, question_id: data.question.id },
      {
        onSuccess: (data) => {
          dispatch(getUserRequest());
          dispatch(successNotification("Answered question successfuly"));
        },
        onError: () => dispatch(errorNotification("Error on register user")),
      }
    );
  };
  if (isLoading) return <Spinner />;

  if (isSuccess)
    return (
      <>
        <div className="row my-24">
          <div className="col-4 text-2xl ">
            <h1 className="">Question</h1>
            <h1 className="text-gray-500 mt-14">{data.question.text}</h1>
          </div>
          <div className="offset-1 col-7">
            <AnswerForm onSubmit={onSubmit} />
          </div>
        </div>
      </>
    );
};

export default AnswerQuestion;
