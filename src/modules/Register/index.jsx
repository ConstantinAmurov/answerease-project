import React from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import Header from "components/Layouts/Public/Header";

import asset from "assets/sign_up.svg";
import Form from "./RegisterForm";

import { register } from "api/Register API";
import {
  errorNotification,
  successNotification,
} from "components/Notifications/actions";

const Register = () => {
  const { mutate } = useMutation(register);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        dispatch(successNotification("Successfully Registered"));
      },
      onError: () => dispatch(errorNotification("Error on register user")),
    });
  };
  return (
    <div className="container mt-20 mb-20">
      <Header></Header>
      <div className="row mt-28">
        <div className="offset-lg-1 col-5 text-center">
          <h1 className="text-2xl">Join us</h1>
          <Form onSubmit={onSubmit}/>
        </div>
        <div className="col-6 flex justify-end top-32">
          <img src={asset} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
