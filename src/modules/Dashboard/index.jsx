import React from "react";
import SubjectsList from "./Subjects";
import Questions from "./Questions";
import Info from "./Info";
import { useParams } from "react-router";
import { useQueryClient, useQuery } from "react-query";
import { getCategoryByName } from "helpers/helpers";
import { getCategories } from "api/Categories API";
import Spinner from "components/Spinner/Spinner";
const Dashboard = () => {
  const { data, isSuccess, isLoading } = useQuery("subjects", () =>
    getCategories()
  );
  const { subject_id } = useParams();

  if (isLoading) return <Spinner />;

  if (isSuccess)
    return (
      <div className="row mt-16">
        <SubjectsList subjects={data} />
        <Questions
          category_id={subject_id ? subject_id : null}
        />
        <Info />
      </div>
    );
};

export default Dashboard;
