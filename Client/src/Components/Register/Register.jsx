import React from "react";
import "../../Styles/Register/Register.css";
function Register() {
  return (
    <div className="register-container flex">
      <h2>Register</h2>
      <form action="">
        <div className="register-form-box flex">
          <input type="text" placeholder="Full Name" required />
          <input type="mail" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="register-bottom">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
