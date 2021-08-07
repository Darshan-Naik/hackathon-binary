import React from "react";
import { useHistory } from "react-router-dom";
import "../../Styles/Navbar/Navbar.css";

function Navbar() {
    const history = useHistory()
  return (
    <nav className="flex nav-container">
      <div className="logo-container" onClick={() => history.push("/")}>
        <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="logo" />
      </div>
      <div className="nav-menu-container">
        <h1>Menu</h1>
      </div>
      <div className="login-button-container">
        <button onClick={() => history.push("/login")}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
