import React from "react";
import "../../Styles/Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="flex nav-container">
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="logo" />
      </div>
      <div className="nav-menu-container">
        <h1>Menu</h1>
      </div>
      <div className="login-button-container">
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
