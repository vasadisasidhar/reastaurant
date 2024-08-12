import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Table from "./Components/Table";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";

const Home = () => {
  return (
    <div>
      <center>
        <Header />
        <Table />
        <Filter />
        <Cards />
      </center>
    </div>
  );
};

export default Home;
