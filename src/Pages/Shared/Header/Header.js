import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Login from "../../Login/Login/Login";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ width: "120px", height: "50px" }} alt="" />
            <FontAwesomeIcon icon={faCoffee} className="icon"></FontAwesomeIcon>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="link nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="link nav-link" href="/blogs">
                Blogs
              </Nav.Link>
              {user ? (
                <>
                  <Link to="" className="link nav-link">
                    Manage Items
                  </Link>
                  <Link to="" className="link nav-link">
                    Add Items
                  </Link>
                  <Link to="/myitems" className="link nav-link">
                    My Items
                  </Link>
                  <Link to="" onClick={handleSignout} className="link nav-link">
                    Signout
                  </Link>
                </>
              ) : (
                <Link to="/register" className="link nav-link">
                  Register
                </Link>
              )}

              {/* <Link to="/registervolunteer">Register Volunteer</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
