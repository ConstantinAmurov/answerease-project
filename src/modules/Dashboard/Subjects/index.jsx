import React from "react";
import { Link } from "react-router-dom";
const SubjectsList = (props) => {
  const { subjects } = props;


  return (
    <div className="col-2 flex flex-col border-r-2 border-gray-200 h-screen font-bold">
      <h1 className="text-2xl mb-4">Subjects:</h1>
      <Link to={"/"} className="text-xl mb-3">
        All Subjects
      </Link>
      {subjects &&
        subjects.map((subject, index) => {
          return (
            <Link to={`/dashboard/subject/${subject.id}`} className="text-xl mb-3">
              {subject.name}
            </Link>
          );
        })}
    </div>
  );
};

export default SubjectsList;
