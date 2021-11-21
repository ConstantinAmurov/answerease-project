import React from "react";

//Formik
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormFooter from "../FormFooter";
import Input from "components/Layouts/Public/Input";
import Button from "components/Layouts/Public/Button";
const LoginSchema = Yup.object().shape({
  userName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
        remember: false,
      }}
      validationSchema={LoginSchema}
      onSubmit={() => console.log("test")}
    >
      {({}) => (
        <Form className=" mt-4 mb-4">
          <Input type="text" name="userName" placeholder="Neptun Code" />
          <Input type="password" name="password" placeholder="Password"></Input>
          <Button type="submit" text="Log in" />
          <FormFooter></FormFooter>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
