import React from "react";

//Formik
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormFooter from "../FormFooter";
import Input from "components/Layouts/Public/Input";
import Button from "components/Layouts/Public/Button";
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        remember: false,
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) =>
        onSubmit({
          username: values.username,
          password: values.password,
        })
      }
    >
      {() => (
        <Form className=" mt-4 mb-4">
          <Input type="text" name="username" placeholder="Neptun Code" />
          <Input type="password" name="password" placeholder="Password"></Input>
          <Button type="submit" text="Log in" />
          <FormFooter></FormFooter>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
