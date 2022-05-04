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
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="#home" className="navbar-brand">
            <h1>Door2Door</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink className="link nav-link" to="/">
                Home
              </CustomLink>
              <CustomLink className="link nav-link" to="/blogs">
                Blogs
              </CustomLink>
              {user ? (
                <>
                  <CustomLink to="/manageinventory" className="link nav-link">
                    Manage Items
                  </CustomLink>
                  <CustomLink to="/additem" className="link nav-link">
                    Add Items
                  </CustomLink>
                  <CustomLink to="/myitems" className="link nav-link">
                    My Items
                  </CustomLink>
                  <CustomLink
                    to=""
                    onClick={handleSignout}
                    className="link nav-link"
                  >
                    Signout
                  </CustomLink>
                </>
              ) : (
                <CustomLink to="/register" className="link nav-link">
                  Register
                </CustomLink>
              )}

              {/* <CustomLink to="/registervolunteer">Register Volunteer</CustomLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
