import React from "react";

import dummyStudents from "./dummyStudents";
import TopStudent from "./TopStudent";
import { getTopHelping } from "api/Top Helping API";
import { useQuery } from "react-query";
import Spinner from "components/Spinner/Spinner";
const TopStudents = () => {
  const { data, isLoading } = useQuery("top-students", () =>
  getTopHelping()
  );

  if (isLoading) return <Spinner />;
  return (
    <div className="px-3">
      <h1 className="mb-10 text-lg">Top helping students:</h1>
      {data &&
        data.map((student, index) => (
          <TopStudent
            name={student.name}
            surname={student.surname}
            username={student.username}
            points={student.point}
          />
        ))}
    </div>
  );
};

export default TopStudents;
