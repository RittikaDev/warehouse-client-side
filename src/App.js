import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "react-router-dom";

import "./App.css";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Routes><Route path="/" element={<Home />} /></Routes> */}
    </div>
  );
}

export default App;
