import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Pages/Banner/Banner";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Inventory from "./Pages/Inventory/Inventory";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner />}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="/manageinventory" element={<ManageInventories />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
