import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center my-5">
        <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>

        <h2 className="text-center mt-2 px-4">Why Our WareHouse </h2>

        <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
      </div>
      <div className="row1-container my-5">
        <div className="box box-down cyan">
          <h2>No Restocking Issues</h2>
          <p>We try our best to restock items as soon as possible.</p>
          <img
            src="https://assets.codepen.io/2301174/icon-supervisor.svg"
            alt=""
          />
        </div>

        <div className="box red">
          <h2>Best Suppliers</h2>
          <p>
            Our suppliers are commonly knows as the best in the corresponding
            fields.
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-team-builder.svg"
            alt=""
          />
        </div>

        <div className="box box-down blue">
          <h2>Management Criteria</h2>
          <p>We have the best management process of handling goods.</p>
          <img
            src="https://assets.codepen.io/2301174/icon-calculator.svg"
            alt=""
          />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Quality Assurance</h2>
          <p>Regularly evaluate to ensure quality</p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
