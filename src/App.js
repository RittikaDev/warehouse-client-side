import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Pages/Banner/Banner";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Inventory from "./Pages/Inventory/Inventory";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import AddItem from "./Pages/AddItem/AddItem";
import MyItems from "./Pages/MyItems/MyItems";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="/myitems" element={<MyItems />}></Route>
        <Route path="/manageinventory" element={<ManageInventories />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
