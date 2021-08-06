import React from "react";
import "../../Styles/Login/Login.css";

function Login() {
  return (
    <div className="login-container flex">
      <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="logo" />
      <h2>Login</h2>
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
