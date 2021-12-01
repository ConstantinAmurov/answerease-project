import React from "react";
import ProfilePicture from "assets/profile.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { addThank, deleteThank } from "api/Thanks API";
import { useMutation, useQueryClient } from "react-query";
import {
  successNotification,
  errorNotification,
} from "components/Notifications/actions";
import { useDispatch } from "react-redux";

import Spinner from "components/Spinner/Spinner";
import { getUserRequest } from "modules/Profile/actions";
const AnswerItem = (props) => {
  const { answer, question, thanked } = props;
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const like = useMutation(addThank);
  const dislike = useMutation(deleteThank);

  const addLike = () => {
    like.mutate(
      { answer_id: answer.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("question");
        },
        onError: () => dispatch(errorNotification("Error on like")),
      }
    );
  };
  const deleteLike = () => {
    dislike.mutate(
      { answer_id: answer.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("question");
        },
        onError: () => dispatch(errorNotification("Error on dislike")),
      }
    );
  };
  if (like.isFetching || dislike.isFetching) return <Spinner />;
  if (answer) {
    return (
      <div className="mb-12">
        <div className="row px-10 pt-3">
          <div className="col-1 p-0">
            <img src={ProfilePicture} alt="" className="" />
          </div>
          <div className="col">
            <header className="col-12 flex-col">
              <h1 className="text-2xl">{answer.user.username}</h1>
              <h1 className="text-lg text-gray-400">
                Helped {answer.user.thanks} times
              </h1>
            </header>
          </div>
          <div className="col-12 mt-10">
            <p className="text-2xl text-gray-500 font-medium">{answer.text}</p>
          </div>
          <div className="col-12 mt-10 flex">
            <span
              className="text-red-500 text-2xl mr-3 cursor-pointer"
              onClick={() => (thanked ? deleteLike() : addLike())}
            >
              {thanked ? <AiFillHeart /> : <AiOutlineHeart />}
            </span>
            <p className="text-lg font-medium ">Like {thanked} </p>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="text-center mt-4">
        <p className="text-xl text-gray-500 font-medium">
          {question.user.username} is waiting for your help.
        </p>
        <p className="text-xl text-gray-500 font-medium">
          Add your answer and earn points.
        </p>
      </div>
    );
};

export default AnswerItem;
