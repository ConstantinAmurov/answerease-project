import React from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import Header from "components/Layouts/Public/Header";

import Form from "./LoginForm";
import { browserRedirect, setToken } from "helpers/helpers";
import { login } from "api/Login API";
import {
  errorNotification,
  successNotification,
} from "components/Notifications/actions";

import asset from "assets/sign_in.svg";
const Login = () => {
  const { mutate } = useMutation(login);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        setToken(data.access_token);
        dispatch(successNotification("Successfully Logged in"));
        browserRedirect("/dashboard");
      },
      onError: () => dispatch(errorNotification("Error on register user")),
    });
  };

  return (
    <div className="container mt-20 mb-20">
      <Header></Header>
      <div className="row mt-28">
        <div className="offset-lg-1 col-5 text-center">
          <h1 className="text-2xl">Welcome back</h1>
          <Form onSubmit={onSubmit} />
        </div>
        <div className="col-6 flex justify-end top-32">
          <img src={asset} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
