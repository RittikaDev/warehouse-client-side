import React from "react";
import "./Queries.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import banner from "../../images/banner.jpg";
import "aos/dist/aos.css";

const Queries = () => {
  return (
    <section className="sec-03">
      <div className="container">
        <div className="section-title">Lorem</div>
        <div className="content row">
          <div className="media-info col-lg-7">
            <li
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Accordion defaultActiveKey="0" className="accordion">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FontAwesomeIcon
                      className="icon me-2"
                      icon={faCircleQuestion}
                    />
                    Accordion Item #1
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Accordion defaultActiveKey="0" className="accordion">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FontAwesomeIcon
                      className="icon me-2"
                      icon={faCircleQuestion}
                    />{" "}
                    Accordion Item #2
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Accordion defaultActiveKey="0" className="accordion">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FontAwesomeIcon
                      className="icon me-2"
                      icon={faCircleQuestion}
                    />{" "}
                    Accordion Item #2
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Accordion defaultActiveKey="0" className="accordion">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FontAwesomeIcon
                      className="icon me-2"
                      icon={faCircleQuestion}
                    />{" "}
                    Accordion Item #2
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
          </div>
          <div className="image col-lg-5">
            <img
              src={banner}
              alt=""
              style={{ width: "350px", height: "250px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Queries;
