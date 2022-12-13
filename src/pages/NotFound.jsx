import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Page Not Found</Card.Title>
          <Card.Text>404 Error</Card.Text>
          <Button variant="primary" onClick={() => navigate("/")}>
            Go To Homepage
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFound;
