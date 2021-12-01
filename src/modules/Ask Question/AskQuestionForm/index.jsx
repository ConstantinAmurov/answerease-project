import React from "react";

import Input from "components/Layouts/Public/Input";
import Select from "components/Layouts/Select";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextArea from "components/Layouts/Private/TextArea";
import { getCategories } from "api/Categories API";
import { useQuery } from "react-query";
import Spinner from "components/Spinner/Spinner";

const QuestionSchema = Yup.object().shape({
  text: Yup.string().required("Required"),
  category_id: Yup.number().required("Required"),
  point: Yup.number().min(0, "Number of points should be more than 0"),
});

const AskQuestionForm = (props) => {
  const { onSubmit } = props;
  let subjectOptions;
  const { data, isSuccess, isLoading } = useQuery("subjects", () =>
    getCategories()
  );

  if (isLoading) return <Spinner />;

  if (isSuccess) {
    subjectOptions = data.map((data) => ({
      value: data.id,
      label: data.name,
    }));
  }
  return (
    <Formik
      initialValues={{
        text: "",
        category_id: 1,
        point: 0,
      }}
      validationSchema={QuestionSchema}
      onSubmit={(values) => {
        onSubmit({ ...values, category_id: parseInt(values.category_id) });
      }}
    >
      {({ handleChange }) => (
        <Form className="mt-4 flex flex-col">
          <TextArea
            name="text"
            type="text"
            placeholder="Write your question here"
          />
          <div className="row">
            <div className="col">
              <Select
                name="category_id"
                options={subjectOptions}
                onChange={handleChange}
              ></Select>
            </div>
            <div className="col">
              <Input name="point" type="number" placeholder="Value"></Input>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue mt-7 text-white h-12  w-56 pt-4 pb-4 pl-14 pr-14 flex align-items-center rounded-full"
          >
            Ask question
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AskQuestionForm;
