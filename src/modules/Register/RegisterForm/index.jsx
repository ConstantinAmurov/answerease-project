import React from "react";

import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

import Input from "components/Layouts/Public/Input";
import Button from "components/Layouts/Public/Button";
import Select from "components/Layouts/Select";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  // faculty: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  passwordConfirmation: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const facultyOptions = [
  {
    value: "Faculty of Education and Psychology",
    label: "Faculty of Education and Psychology",
  },
  {
    value: "Faculty of Humanities",
    label: "Faculty of Humanities",
  },
  {
    value: "Faculty of Informatics",
    label: "Faculty of Informatics",
  },
  {
    value: "Faculty of Law",
    label: "Faculty of Law",
  },
  {
    value: "Faculty of Primary and Pre-School Education",
    label: "Faculty of Primary and Pre-School Education",
  },
  {
    value: "Faculty of Science",
    label: "Faculty of Science",
  },
  {
    value: "Faculty of Social Sciences",
    label: "Faculty of Social Sciences",
  },
];

const RegisterForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        faculty: "",
        username: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) =>
        onSubmit({
          name: values.name,
          faculty: values.faculty,
          surname: values.surname,
          username: values.username,
          password: values.password,
        })
      }
    >
      {({ handleChange, values }) => (
        <Form className=" mt-4 mb-4">
          <Input type="text" name="name" placeholder="First Name" />
          <Input type="text" name="surname" placeholder="Last Name" />
          <Input type="text" name="username" placeholder="User name" />
          <Select
            name="faculty"
            value={values.faculty}
            onChange={handleChange}
            options={facultyOptions}
            className="h-12 w-100 rounded-2xl text-gray-500  text-lg px-4 bg-gray-100 justify-center"
          />
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
