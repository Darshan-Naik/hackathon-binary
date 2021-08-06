import React from "react";
import "../../Styles/Login/Login.css";

function Login() {
  return (
    <div className="login-container flex">
      <p className="login-container-p">Login</p>
      <form action="">
        <div className="login-form-box flex">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="login-bottom">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
