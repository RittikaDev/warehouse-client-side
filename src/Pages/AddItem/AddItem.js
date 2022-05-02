import React from "react";
import "./AddItem.css";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" container">
      <h2>Add New Item</h2>
      <form
        className="col-lg-12 container add-item"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row mb-3">
          <div className="col-lg-12 ">
            <input
              type="text"
              placeholder="Item Name"
              {...register("name", { required: true })}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-4 ">
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="col-lg-4 ">
            <input
              type="text"
              placeholder="Quantity"
              {...register("quantity", { required: true })}
            />
          </div>
          <div className="col-lg-4 ">
            <input
              type="text"
              placeholder="Supplier"
              {...register("supplier", { required: true })}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 ">
            <input
              type="text"
              placeholder="Description"
              {...register("description", { required: true })}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 ">
            <input
              type="text"
              placeholder="Image URL"
              {...register("image", { required: true })}
            />
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary w-25 mx-auto my-4">
            Add New Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
