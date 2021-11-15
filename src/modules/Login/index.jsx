import React from "react";
import Header from "components/Layouts/Public/Header";

import Form from "./LoginForm";

import asset from "assets/sign_in.svg";
const Login = () => {
  return (
    <div className="container mt-20 mb-20">
      <Header></Header>
      <div className="row mt-28">
        <div className="offset-lg-1 col-5 text-center">
          <h1 className="text-2xl">Welcome back</h1>
          <Form />
        </div>
        <div className="col-6 flex justify-end top-32">
          <img src={asset} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
