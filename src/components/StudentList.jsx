import React from "react";
import StudentsTable from "./tables/StudentsTable";

const StudentList = ({ studentDataGlobal, setStudentData }) => {
  return (
    <StudentsTable
      studentDataGlobal={studentDataGlobal}
      setStudentData={setStudentData}
    />
  );
};

export default StudentList;
