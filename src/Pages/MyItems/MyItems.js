import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState();
  const navigate = useNavigate();
  console.log(user?.reloadUserInfo.providerUserInfo[0].providerId);
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/item?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(localStorage.getItem("token"));
        setMyItems(data);
      } catch (error) {
        console.log(error);
        // if (
        //   user?.reloadUserInfo?.providerUserInfo[0]?.providerId !== "google.com"
        // )
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [navigate, user?.email, user?.reloadUserInfo?.providerUserInfo]);
  // console.log(myItems?.length);
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
        fetch(`http://localhost:5000/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted", data);
            const remaining = myItems.filter((item) => item._id !== id);
            setMyItems(remaining);
          });
        Swal.fire("Deleted!", "One item has been deleted.", "success");
      }
    });
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
            {myItems?.map((item) => (
              <tr>
                <td className="table-data">
                  <img
                    className="px-auto"
                    src={item?.image}
                    style={{ width: "60%", height: "60px" }}
                    alt=""
                  />
                </td>
                <td>{item?.title}</td>
                <td>{item?.price}</td>
                <td>{item?.supplier}</td>
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
      </div>
    </div>
  );
};

export default MyItems;
