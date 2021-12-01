import React from "react";

import AskQuestionForm from "./AskQuestionForm";

import { askQuestion } from "api/Questions API";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import {
  errorNotification,
  successNotification,
} from "components/Notifications/actions";

const AskQuestion = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(askQuestion);
  const onSubmit = (data) => {
    const { category_id } = data;
    mutate(data, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("questions");

        dispatch(successNotification("Added question succesfully"));
      },
      onError: () => dispatch(errorNotification("Error on adding question")),
    });
  };

  return (
    <div className="container mt-20 mb-20">
      <div className="row mt-28">
        <div className="col-6 text-left">
          <h1 className="text-2xl ">Ask question...</h1>
          <AskQuestionForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
