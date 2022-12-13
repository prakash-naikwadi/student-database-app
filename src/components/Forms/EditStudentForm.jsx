import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditStudentForm = ({
  setStudentData,
  studentDataGlobal,
  setShow,
  student,
}) => {
  const [validated, setValidated] = useState(false);

  const [rollNo, setRollNo] = useState(student.rollNo);
  const [name, setName] = useState(student.name);
  const [address, setAddress] = useState(student.address);
  const [contactNumber, setContactNumber] = useState(student.contactNumber);
  const [email, setEmail] = useState(student.email);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }
    event.preventDefault();

    // Update Logic

    const index = studentDataGlobal.findIndex((item) => {
      return item.rollNo === student.rollNo;
    });

    setStudentData((prevState) =>
      prevState.map((task) => {
        if (task.rollNo === prevState[index].rollNo) {
          return {
            ...task,
            rollNo: rollNo,
            name: name,
            address: address,
            contactNumber: contactNumber,
            email: email,
          };
        }
        return task;
      })
    );

    console.log("submitted");
    setShow(false);

    setValidated(false);

    setRollNo("");
    setName("");
    setAddress("");
    setContactNumber("");
    setEmail("");
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rollNo">
        <Form.Label>Roll No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Roll No"
          required
          onChange={(e) => setRollNo(e.target.value)}
          value={rollNo}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="fullName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Full Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          required
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Contact Number"
          required
          onChange={(e) => setContactNumber(e.target.value)}
          value={contactNumber}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <div style={{ textAlign: "center" }}>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </div>
    </Form>
  );
};

export default EditStudentForm;
