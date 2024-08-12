import React from "react";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <h1 class="navbar-brand restaurant-text">Resturtant</h1>
        <button type="button" class="btn btn-primary">
          Orders
          <span class="badge bg-secondary">5</span>
        </button>
      </nav>
    </div>
  );
};

export default Header;
