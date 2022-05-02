import React from "react";
import "./Inventory.css";
import { useParams } from "react-router-dom";
import useItems from "../../hooks/useItems";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useItems(id);
  const quantityDecrease = (newQuantity) => {
    let quantity = parseInt(newQuantity) - 1;
    console.log(quantity);
    setItem({ ...item, quantity: quantity });
    const updateQuantity = { quantity };
    const url = `http://localhost:5000/inventory/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };
  console.log(item.quantity);

  return (
    <div className="sec-01">
      <div className="container">
        <div className="inventory-content row">
          <div className="inventory-image col-lg-4">
            <img src={item.image} alt="" />
          </div>
          <div className="col-lg-1"></div>

          <div className="inventory-text col-lg-7">
            <div className="inventory-textbox mb-1">
              <h4 className="text-center">Product Name : {item.title}</h4>
              <p className="text-center">
                <strong>Product ID :</strong> {item._id}
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <p className="inventory-textbox">
                  <strong>Price :</strong> {item.price}
                </p>
              </div>
              <div className="col-lg-6">
                <p className="inventory-textbox">
                  <strong>Quantity :</strong> {item.quantity}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <p className="inventory-textbox">
                  <strong> Description : </strong> {item.description}
                </p>
              </div>
              <div className="col-lg-4">
                <p className="inventory-textbox">
                  <strong>Supplier : </strong>
                  {item.supplier}
                </p>
              </div>
            </div>
            <button onClick={() => quantityDecrease(item.quantity)}>
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
