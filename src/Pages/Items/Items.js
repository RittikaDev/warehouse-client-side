import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  // fetch("https://intense-castle-01868.herokuapp.com/items")

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  let a = items.slice(0, 6);
  console.log(a._id);
  return (
    <>
      <div className="container items-container">
        {a.map((item) => (
          <figure className="image-block">
            <img
              src={item.image}
              alt=""
              style={{ width: "90%", height: "80%", marginTop: "-130px" }}
            />
            <figcaption>
              <h3>{item.title}</h3>
              <p>
                <div>
                  <span className="text-item">Product ID : </span>
                  {item._id}
                </div>
                <div>
                  <span className="text-item">Price : </span>
                  {item.price}
                </div>
                <div>
                  <span className="text-item">Quantity : </span>
                  {item.quantity}
                </div>
              </p>
              <Link
                to={"/inventory/" + item._id}
                className="btn mt-0"
                item={item}
              >
                More Info
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="row my-5 ">
        <div className="col-lg-12 text-center">
          <Link to="/manageinventory" className="btn1">
            Manage Inventories
          </Link>
        </div>
      </div>
    </>
  );
};

export default Items;
