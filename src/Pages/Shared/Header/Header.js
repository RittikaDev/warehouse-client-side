import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

import Login from "../../Login/Login/Login";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ width: "120px", height: "50px" }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="link nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="link nav-link" href="#link">
                Donation
              </Nav.Link>
              <Nav.Link className="link nav-link" href="/events">
                Events
              </Nav.Link>
              <Nav.Link className="link nav-link" href="#link">
                Blog
              </Nav.Link>
              {/* {user ? (
              <Link to="" onClick={handleSignout}>
                Signout
              </Link>
            ) : (
              <Link to="/register">Register</Link>
            )} */}
              <Link className="link nav-link" to="/register">
                Register
              </Link>
              {/* <Link to="/registervolunteer">Register Volunteer</Link> */}
              <Nav.Link href="#link">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
