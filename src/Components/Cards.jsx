import React, { useState } from "react";

const Cards = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetch(
      "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      });
  }, []);
  return (
    <center>
      <div>
        {data.length > 0 ? (
          <div className="container">
            <div className="row">
              {data.map((item) => (
                <div className="col-md-4" style={{ padding: "5px" }}>
                  
                  <div className="card"style={{ width: "18rem", padding: "3px" }}>
                    <img src={item.url}className="card-img-top"></img>

                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="card-text">Rs.{item.prize}</div>
                      <button className="btn btn-primary">Order</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="spinner-border text-primart"></div>
        )}
      </div>
    </center>
  );
};

export default Cards;
