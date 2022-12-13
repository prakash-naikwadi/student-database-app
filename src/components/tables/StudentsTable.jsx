import Table from "react-bootstrap/Table";

function StudentsTable({ studentDataGlobal }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>rollNo</th>
          <th>name</th>
          <th>address</th>
          <th>contactNumber</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {console.log(studentDataGlobal)}
        {studentDataGlobal.map((student) => {
          return (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.contactNumber}</td>
              <td>{student.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default StudentsTable;
