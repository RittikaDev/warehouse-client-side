import React, { useState } from "react";
import "./Inventory.css";
import { Link, useParams } from "react-router-dom";
import useItems from "../../hooks/useItems";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useItems(id);
  const [input, setInput] = useState(0);
  const quantityDecrease = (newQuantity) => {
    let quantity = parseInt(newQuantity) - 1;
    // console.log(quantity);
    setItem({ ...item, quantity: quantity });
    const updateQuantity = { quantity };
    const url = `https://intense-castle-01868.herokuapp.com/inventory/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("success", data);
      });
  };
  // console.log(item.quantity);

  //Input value to take restock items
  const takeInput = (e) => {
    let inputValue = parseInt(e.target.value);
    setInput(inputValue);
  };
  // Restock Quantity
  const addQuantity = (e) => {
    e.preventDefault();
    if (input > 0) {
      let newQuantity = input + item.quantity;
      setItem({ ...item, quantity: newQuantity });
      const updateQuantity = { quantity: newQuantity };
      const url = `https://intense-castle-01868.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("success", data);
        });
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <>
      <div className="sec-01">
        <div className="container">
          <div className="inventory-content row mb-5">
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
              <div className="text-center py-2">
                <button
                  className="btn1 py-2"
                  onClick={() => quantityDecrease(item.quantity)}
                >
                  Delivered
                </button>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <h3 className="text-center my-5">Restock Items</h3>
            <form className="inventory-form" onSubmit={addQuantity}>
              <div className="col-lg-9">
                {/* <label htmlFor="">Restock</label> */}
                <input
                  type="number"
                  placeholder="Restock Items"
                  className="px-5 "
                  onBlur={takeInput}
                />
              </div>
              <div className="col-lg-3">
                <button className="btn1 ms-3 mt-0 py-3">Add</button>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <Link to="/manageinventory" className="btn1  ">
                Manage Inventories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
