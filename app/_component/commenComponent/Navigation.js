"use client";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const [auth, setAuth] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth");
    if (!isLoggedIn) {
      // router.push("/");
    } else {
      setAuth(JSON.parse(isLoggedIn));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    router.push("/");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid="xxl">
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/collection">Collection</Nav.Link>
              {auth?.user ? (
                <NavDropdown
                  title={
                    auth.user.role === 1
                      ? `Admin ${auth.user.name}`
                      : `${auth.user.name}`
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/myaccount">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
