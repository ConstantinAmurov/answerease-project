import React from "react";

import dummyStudents from "./dummyStudents";
import TopStudent from "./TopStudent";
const TopStudents = () => {
  return (
    <div className="px-3">
      <h1 className="mb-10 text-lg">Top helping students:</h1>
      {dummyStudents &&
        dummyStudents.map((student, index) => (
          <TopStudent
            name={student.name}
            surname={student.surname}
            username={student.username}
            points={student.points}
          />
        ))}
    </div>
  );
};

export default TopStudents;
