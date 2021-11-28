import React from "react";

//Formik
import { Form, Formik } from "formik";
import * as Yup from "yup";

import TextArea from "components/Layouts/Private/TextArea";

const AnswerSchema = Yup.object().shape({
  answer: Yup.string().required("Answer Required"),
});

const AnswerForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{
        answer: "",
      }}
      validationSchema={AnswerSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="">
          <TextArea name="answer" placeholder="Write your answer here..." />
        </Form>
      )}
    </Formik>
  );
};

export default AnswerForm;
