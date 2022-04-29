import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Banner from "../../Banner/Banner";
import WhyUs from "../../WhyUs/WhyUs";

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
              <Nav.Link className="link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                Donation
              </Nav.Link>
              <Nav.Link className="link" href="/events">
                Events
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                Blog
              </Nav.Link>
              {/* {user ? (
              <Link to="" onClick={handleSignout}>
                Signout
              </Link>
            ) : (
              <Link to="/register">Register</Link>
            )} */}

              {/* <Link to="/registervolunteer">Register Volunteer</Link> */}
              <Nav.Link href="#link">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner></Banner>
      <WhyUs></WhyUs>
    </>
  );
};

export default Header;
