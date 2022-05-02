import React, { useEffect, useState } from "react";
import "./ManageInventories.css";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ManageInventories = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);

  //   pagination
  useEffect(() => {
    fetch("http://localhost:5000/itemcount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 7);
        setPageCount(pages);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/items?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [page, size]);
  const itemDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("deleted", data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="manage-inventory container">
      <h1>Manage Inventories</h1>
      <div className="manage-inventory-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Supplier</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td className="table-data">
                  <img
                    className="px-auto"
                    src={item.image}
                    style={{ width: "60%", height: "60px" }}
                    alt=""
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.supplier}</td>
                <td className="text-center me-4">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="icon2"
                    onClick={() => itemDelete(item._id)}
                  ></FontAwesomeIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={
                page === number ? "btn btn-primary" : "btn btn-outline-primary"
              }
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
        <Link to="/additem" className="btn btn-primary my-5 px-5">
          <FontAwesomeIcon icon={faPlus} className="plus"></FontAwesomeIcon>
          Add New Item
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
