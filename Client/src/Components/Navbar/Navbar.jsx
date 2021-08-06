import React from 'react'
import "../../Styles/Navbar/Navbar.css"

function Navbar() {
    return (
      <nav className="flex nav-container">
        <div className="logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOIJTKhQNgBLepC2ZrFqrEJ4s8fKh0FySbaKu-kQk9IHaRPOo8h6nQ6oglSQX4GxciM&usqp=CAU"
            alt="logo"
          />
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

export default Navbar
