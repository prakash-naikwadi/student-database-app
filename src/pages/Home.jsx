import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import StudentForm from "../components/Forms/StudentForm";
import { useNavigate } from "react-router-dom";

const Home = ({ setStudentData }) => {
  const navigate = useNavigate();
  const handleViewStudents = () => {
    navigate("/students");
  };
  return (
    <Container>
      <div className="text-end">
        <Button className="mt-2" variant="success" onClick={handleViewStudents}>
          View All Students
        </Button>
      </div>
      <h1 style={{ textAlign: "center" }}>Add Student Data</h1>
      <StudentForm setStudentData={setStudentData} />
    </Container>
  );
};

export default Home;
