import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const [firstSix, setFirstSix] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  let a = items.slice(0, 6);
  console.log(a._id);
  return (
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
              <div>Price: {item.price}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Quantity: {item._id}</div>
            </p>
            <Link to={"/inventory/" + item._id}>More Info</Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Items;