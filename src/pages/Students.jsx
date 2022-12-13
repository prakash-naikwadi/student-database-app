import React from "react";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import StudentList from "../components/StudentList";

const Students = ({ studentDataGlobal, setStudentData }) => {
  const navigate = useNavigate();
  const handleViewHomePage = () => {
    navigate("/");
  };
  return (
    <Container>
      <div className="text-end">
        <Button
          className="mt-2 mb-2"
          variant="success"
          onClick={handleViewHomePage}
        >
          Add Student
        </Button>
      </div>
      <StudentList
        studentDataGlobal={studentDataGlobal}
        setStudentData={setStudentData}
      />
    </Container>
  );
};

export default Students;
