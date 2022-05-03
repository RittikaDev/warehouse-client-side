import React from "react";
import "./AddItem.css";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";

const AddItem = () => {
  const [user] = useAuthState(auth);
  //   const { register, handleSubmit } = useForm();
  //   const onSubmit = (data) => {
  //     console.log(data);
  //     fetch("http://localhost:5000/items", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };
  const handleSubmit = (event) => {
    event.preventDefault();
    const addItem = {
      email: user.email,
      title: event.target.title.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      image: event.target.image.value,
      description: event.target.description.value,
      supplier: event.target.supplier.value,
    };
    axios.post("http://localhost:5000/items", addItem).then((res) => {
      console.log(res);
      const { data } = res;
    });
    axios.post("http://localhost:5000/item", addItem).then((res) => {
      console.log(res);
      const { data } = res;
    });
  };
  return (
    <div className=" container">
      {/* <h2>Add New Item</h2> */}
      <form className="col-lg-12 container add-item" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-lg-12 ">
            <input
              className="input"
              type="text"
              placeholder="Email"
              value={user?.email}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 ">
            <input
              className="input"
              name="title"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-4 ">
            <input
              className="input"
              name="price"
              type="text"
              placeholder="Price"
            />
          </div>
          <div className="col-lg-4 ">
            <input
              className="input"
              name="quantity"
              type="text"
              placeholder="Quantity"
            />
          </div>
          <div className="col-lg-4 ">
            <input
              className="input"
              name="supplier"
              type="text"
              placeholder="Supplier"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 ">
            <input
              className="input"
              name="description"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 ">
            <input
              className="input"
              name="image"
              type="text"
              placeholder="Image URL"
            />
          </div>
        </div>
        <div className="row">
          <button className="btn1 w-25 mx-auto my-4" type="submit">
            Add New Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
