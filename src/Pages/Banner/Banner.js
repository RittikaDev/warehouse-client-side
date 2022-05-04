import React from "react";
import "./Banner.css";
import banner from "../../images/banner.jpg";
import Fade from "react-reveal/Fade";
import Items from "../Items/Items";
import WhyUs from "../WhyUs/WhyUs";
import Queries from "../Queries/Queries";

const Banner = () => {
  return (
    <>
      <main className="main mb-5 container">
        <section className="home section p-3" id="home">
          <div className="home__container container grid row">
            <div className="col-lg-7 me-4">
              <Fade top>
                <div className="home__data">
                  <h1 className="home__title">Door2Door</h1>
                  <h5 className="home__description">
                    Your First Hand Grocery Warehouse with best quality and
                    quantity{" "}
                  </h5>
                  <div className="home__value">
                    <div className="card-home px-5 py-2">
                      <h1 className="home__value-number">
                        4k <span>+</span>
                      </h1>
                      <span className="home__value-description">
                        Premium Product
                      </span>
                    </div>
                    <div className="card-home px-5 py-2">
                      <h1 className="home__value-number">
                        1k <span>+</span>
                      </h1>
                      <span className="home__value-description">Supplier</span>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-4 ms-5">
              <Fade bottom>
                <div className="home__images">
                  <div className="home__orbe"></div>
                  <div className="home__img">
                    <img
                      src={banner}
                      alt=""
                      style={{ width: "254px", height: "300px" }}
                    />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </main>

      <Items />
      <WhyUs></WhyUs>
      <Queries />
    </>
  );
};

export default Banner;
