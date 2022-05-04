import React, { useEffect, useState } from "react";
import "./ManageInventories.css";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageInventories = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);

  //   pagination
  useEffect(() => {
    fetch("https://intense-castle-01868.herokuapp.com/itemcount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 7);
        setPageCount(pages);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://intense-castle-01868.herokuapp.com/items?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [page, size]);

  const itemDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://intense-castle-01868.herokuapp.com/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted", data);
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          });
        Swal.fire("Deleted!", "One item has been deleted.", "success");
      }
    });
  };
  return (
    <div className="manage-inventory container my-4">
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
                    style={{ fill: "red" }}
                    onClick={() => itemDelete(item._id)}
                  ></FontAwesomeIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="mb-5 d-flex justify-content-end me-1">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={
                page === number
                  ? "btn btn-primary me-2"
                  : "btn btn-outline-primary me-2"
              }
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
        <div className="row my-5 ">
          <div className="col-lg-12 text-center">
            <Link to="/additem" className="btn1 my-5 px-5">
              <FontAwesomeIcon icon={faPlus} className="plus"></FontAwesomeIcon>
              Add New Item
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
