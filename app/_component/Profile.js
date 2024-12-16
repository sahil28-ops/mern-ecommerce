"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";

function ProfileForm() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const personalDetails = localStorage.getItem("auth");
    if (personalDetails) {
      setDetails(JSON.parse(personalDetails));
    }
  }, []);
  // const [name, setName] = useState(details?.user?.name);
  console.log(details?.user?.name);
  return (
    <Container>
      <Form>
        {/* First Name and Last Name */}
        <div className="d-flex gap-3 mb-3">
          <Form.Group controlId="Name" className="flex-grow-1">
            <Form.Label>Name *</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </div>

        {/* Email */}
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email Id *</Form.Label>
          <Form.Control type="email" value={details?.user?.email} />
        </Form.Group>

        {/* Mobile Number */}
        <Form.Group controlId="mobile" className="mb-3">
          <Form.Label>Mobile Number *</Form.Label>
          <Form.Control type="tel" value={details?.user?.mobile} />
        </Form.Group>

        {/* address */}
        <Form.Group controlId="address" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={details?.user?.address} />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
}

export default ProfileForm;
