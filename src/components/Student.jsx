import React from "react";
import Button from "react-bootstrap/Button";

import ModalComponent from "./modals/ModalComponent";

const Student = ({ student, setStudentData, studentDataGlobal }) => {
  const handleDelete = () => {
    const newData = studentDataGlobal.filter((item) => {
      return student.rollNo !== item.rollNo;
    });

    setStudentData([...newData]);
  };

  return (
    <tr key={student.rollNo}>
      <td>{student.rollNo}</td>
      <td>{student.name}</td>
      <td>{student.address}</td>
      <td>{student.contactNumber}</td>
      <td>{student.email}</td>
      <td>
        <ModalComponent
          studentDataGlobal={studentDataGlobal}
          setStudentData={setStudentData}
          student={student}
        />
      </td>
      <td>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Student;
