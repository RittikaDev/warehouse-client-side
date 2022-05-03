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
        <h3>Lorem ipsum</h3>
        <ul className="socials">
          <Nav.Link href="#" className="icon-footer facebookIcon">
            <span class="tooltip">Facebook</span>
            <span className="icon-margin">
              <FontAwesomeIcon className="facebook" icon={faFacebookF}>
                Facebook
              </FontAwesomeIcon>
            </span>
          </Nav.Link>
          <Nav.Link href="#" className="icon-footer instagramIcon">
            <span class="tooltip">Instagram</span>
            <span className="icon-margin ">
              <FontAwesomeIcon
                className="facebook "
                icon={faInstagram}
              ></FontAwesomeIcon>
            </span>
          </Nav.Link>
          <Nav.Link href="#" className=" icon-footer twitterIcon">
            <span class="tooltip">Twitter</span>
            <span className="icon-margin">
              <FontAwesomeIcon
                className="facebook"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </span>
          </Nav.Link>
          <li>{/* <FontAwesomeIcon className="a" icon={faFacebookF} /> */}</li>
          {/* <li>
            <FontAwesomeIcon className="a" icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon className="a" icon={faInstagram} />
          </li> */}
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; 2022 lorem </p>
      </div>
    </footer>
  );
};

export default Footer;
