import { useState } from "react";
import Table from "react-bootstrap/Table";

import ModalComponent from "../modals/ModalComponent";
import Student from "../Student";

function StudentsTable({ studentDataGlobal, setStudentData }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>rollNo</th>
            <th>name</th>
            <th>address</th>
            <th>contactNumber</th>
            <th>email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {console.log(studentDataGlobal)}
          {studentDataGlobal.map((student) => {
            return (
              <Student
                student={student}
                setStudentData={setStudentData}
                studentDataGlobal={studentDataGlobal}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default StudentsTable;
