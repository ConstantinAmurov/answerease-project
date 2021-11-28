import React from "react";
import dummySubjects from "./dummySubjects";
import { Link } from "react-router-dom";
const SubjectsList = () => {
  return (
    <div className="col-2 flex flex-col border-r-2 border-gray-200 h-screen font-bold">
      <h1 className="text-2xl mb-4">Subjects:</h1>
      {dummySubjects &&
        dummySubjects.map((subject, index) => {
          return (
            <Link to={subject.url} className="text-xl mb-3">
              {subject.text}
            </Link>
          );
        })}
    </div>
  );
};

export default SubjectsList;
