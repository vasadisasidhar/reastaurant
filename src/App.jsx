import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Orders" element={<Orders />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
