import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Layouts/Public/Input";
import Button from "components/Layouts/Public/Button";

//Formik
import FormFooter from "modules/Login/FormFooter";

const RegisterSchema = Yup.object().shape({
  userName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  passwordConfirmation: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
        passwordConfirmation: "",
        remember: false,
      }}
      validationSchema={RegisterSchema}
      onSubmit={() => console.log("test")}
    >
      {({}) => (
        <Form className=" mt-4 mb-4">
          <Input type="text" name="userName" placeholder="Neptun Code" />
          <Input type="password" name="password" placeholder="Password"></Input>
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Repeat password"
          ></Input>
          <Button type="submit" text="Sign up" />
          <FormFooter></FormFooter>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
