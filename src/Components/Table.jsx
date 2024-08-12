import React, { useState } from "react";

const Table = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const inActiveBth = "btn btn-outline-primary m-2";
  const activeBth = "btn btn-outline-primary m-2 active";
  const [number, setNumber] = useState();
  return (
    <div>
          <center className="mt-2">
              <h2>Please Select your table number...</h2>
        {numbers.map((num, index) => (
          <div style={{ display: "inline" }} key={index}>
            
            <buton class={number===num?activeBth:inActiveBth} onClick={() => setNumber(num)}>
              {num}
            </buton>
          </div>
        ))}
      </center>
    </div>
  );
};

export default Table;
