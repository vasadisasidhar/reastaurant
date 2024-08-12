import React, { useState } from "react";

const Filter = () => {
  const prod = [
    "All items",
    "Rice DataTransferItemList",
    "Cool Drinks",
    "Hot Drinks",
  ];
  const [filter, setFilter] = useState("All Items");
  return (
    <div>
      <center className="mt-3">
        <span className="h4 m-2">Filter:</span>
        <select
          name="filter"
          className="p-1"
          onChange={(e) => setFilter(e.target.value)}
        >
          {prod.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <button className="btn btn-sm btn-primary m-2">Submit</button>
      </center>
    </div>
  );
};

export default Filter;
