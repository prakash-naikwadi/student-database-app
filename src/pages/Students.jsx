import React from "react";
import StudentsTable from "../components/tables/StudentsTable";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Students = ({ studentDataGlobal }) => {
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
      <StudentsTable studentDataGlobal={studentDataGlobal} />
    </Container>
  );
};

export default Students;
