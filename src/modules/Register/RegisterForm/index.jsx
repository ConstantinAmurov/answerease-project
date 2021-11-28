import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Layouts/Public/Input";
import Button from "components/Layouts/Public/Button";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required"),

  surname: Yup.string().required("Required"),

  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  passwordConfirmation: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const RegisterForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        username: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) =>
        onSubmit({
          name: values.name,
          surname: values.surname,
          username: values.username,
          password: values.password,
        })
      }
    >
      {() => (
        <Form className=" mt-4 mb-4">
          <Input type="text" name="name" placeholder="First Name" />
          <Input type="text" name="surname" placeholder="Last Name" />
          <Input type="text" name="username" placeholder="User name" />
          <Input type="password" name="password" placeholder="Password"></Input>
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Repeat password"
          ></Input>
          <Button type="submit" text="Sign up" />
          {/* <FormFooter></FormFooter> */}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
