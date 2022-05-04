import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Door2Door</h3>
        <h5>Foolow us on our socials</h5>
        <ul className="socials">
          <Nav.Link href="#" className="icon-footer facebookIcon">
            <span className="tooltip">Facebook</span>
            <span className="icon-margin">
              <FontAwesomeIcon className="facebook" icon={faFacebookF}>
                Facebook
              </FontAwesomeIcon>
            </span>
          </Nav.Link>
          <Nav.Link href="#" className="icon-footer instagramIcon">
            <span className="tooltip">Instagram</span>
            <span className="icon-margin ">
              <FontAwesomeIcon
                className="facebook "
                icon={faInstagram}
              ></FontAwesomeIcon>
            </span>
          </Nav.Link>
          <Nav.Link href="#" className=" icon-footer twitterIcon">
            <span className="tooltip">Twitter</span>
            <span className="icon-margin">
              <FontAwesomeIcon
                className="facebook"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </span>
          </Nav.Link>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; 2022 Door2Door </p>
      </div>
    </footer>
  );
};

export default Footer;
