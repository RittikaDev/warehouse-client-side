import React from "react";
import "./Queries.css";
import { Accordion } from "react-bootstrap";
import banner from "../../images/banner.jpg";
import "aos/dist/aos.css";

const Queries = () => {
  return (
    <section className="sec-03 my-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
          <h2 className="section-title text-center mt-2 px-4">
            Queries & Answers
          </h2>
          <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
        </div>
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
                  <Accordion.Header>How Do We deliver?</Accordion.Header>
                  <Accordion.Body>
                    We are completely an online based warehouse. You will get
                    all the informations in our site. And for further more
                    queries can contact us in our socials.
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
                  <Accordion.Header>Suppliers Deal</Accordion.Header>
                  <Accordion.Body>
                    We have a contract with our suppliers, they sell their goods
                    per month for a fixed quantity.
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
                    <span>Adding Items</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Users can login and add item based on their will
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
                  <Accordion.Header>Managing</Accordion.Header>
                  <Accordion.Body>
                    We have strict management system. Nothing is out of our
                    sight.
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
