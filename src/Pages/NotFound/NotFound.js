import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="container text-center notfound">
        <div className="d-flex align-items-center justify-content-center">
          <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
          <h1 style={{ fontSize: "80px" }} className="mt-2 px-2">
            Oops!!
          </h1>
          <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
        </div>
        <h5 style={{ fontSize: "50px" }}>404 Page Not Found</h5>
        <Link to="/">
          <button className="btn btn-primary btn-lg my-5">
            Go To HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
