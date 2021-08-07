import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../Redux/Auth/action";
import "../../Styles/Login/Login.css";
const initState = {
  email: "",
  password: "",
};

function MentorLogin() {
  const [data, setData] = React.useState(initState);
  const { email, password } = data;
  const isAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...data,
      [name]: value,
    };
    setData(payload);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginRequest());
    const requestParam = {
      method: "post",
      url: "http://localhost:8000/mentor/login",
      header: {
        "Content-Type": "application/json",
      },
      data,
    };
    axios(requestParam)
      .then((response) => dispatch(loginSuccess(response)))
      .catch((err) => dispatch(loginFailure(err)));
  };

  return (
    <section className="login-container-main flex">
      <div className="login-container flex">
        <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="logo" />
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="login-form-box flex">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button type="submit" className="login-bottom">
              Login
            </button>
          </div>
        </form>
        <small>Don't have an account? </small>
        <Link to="/mentor-register">Register</Link>
        <small>
          Login as a <Link to="/login">Student</Link>{" "}
        </small>
      </div>
    </section>
  );
}

export default MentorLogin;
