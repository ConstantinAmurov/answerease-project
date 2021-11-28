import React from "react";
import SubjectsList from "./Subjects";
import Questions from "./Questions";
import Info from "./Info";
const Dashboard = () => {
  return (
    <div className="row mt-16">
      <SubjectsList />
      <Questions />
      <Info />
    </div>
  );
};

export default Dashboard;
