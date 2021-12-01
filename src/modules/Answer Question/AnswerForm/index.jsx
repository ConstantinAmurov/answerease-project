import React from "react";

//Formik
import { Form, Formik } from "formik";
import * as Yup from "yup";

import TextArea from "components/Layouts/Private/TextArea";

const AnswerSchema = Yup.object().shape({
  text: Yup.string().required("Answer Required"),
});

const AnswerForm = (props) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      validationSchema={AnswerSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="">
          <TextArea name="text" placeholder="Write your answer here..." />
          <div className="row mt-10" >
            <div className="col flex justify-content-end">
              <button className="bg-blue text-white h-12 pt-4 pb-4 pl-14 pr-14 flex align-items-center rounded-full">
                Answer question
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AnswerForm;
