import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const StudentForm = ({ setStudentData }) => {
  const [validated, setValidated] = useState(false);

  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState();
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

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
    setStudentData((prev) => {
      return [
        ...prev,
        {
          rollNo: rollNo,
          name: name,
          address: address,
          contactNumber: contactNumber,
          email: email,
        },
      ];
    });

    console.log("submitted");

    setValidated(false);

    setRollNo("");
    setName("");
    setAddress("");
    setContactNumber("");
    setEmail("");
  };

  // useEffect(() => {
  //   getStudentData(studentData);
  // }, [studentData, getStudentData]);

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
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default StudentForm;
