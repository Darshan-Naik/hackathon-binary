import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  registerFailure,
  registerRequest,
  registerSuccess
} from "../../Redux/Auth/action";
import "../../Styles/Register/Register.css";
import { url } from '../../Utils/serverUrl';
const initState = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const [data, setData] = React.useState(initState);
  const { name, email, password } = data;

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

    dispatch(registerRequest());
    const requestParam = {
      method: "post",
      url: url + "/students/signup",
      header: {
        "Content-Type": "application/json",
      },
      data,
    };
    axios(requestParam)
      .then((response) => dispatch(registerSuccess(response.data.data)))
      .catch((err) => dispatch(registerFailure(err)));
  };

  return (
    <section className="register-container-main flex">
      <div className="register-container flex">
        <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="logo" />
        <h2>Register as Student</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="register-form-box flex">
            <input
              name="name"
              value={name}
              type="text"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button type="submit" className="register-bottom">
              Register
            </button>
          </div>
        </form>
        <small>Already have an account? </small>
        <Link to="/login">Login</Link>
        <small>
          Register as a <Link to="/mentor-register">Mentor</Link>{" "}
        </small>
      </div>
    </section>
  );
}

export default Register;
