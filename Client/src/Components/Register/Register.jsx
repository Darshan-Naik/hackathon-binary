import React from "react";
import "../../Styles/Register/Register.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../../Redux/Auth/action";
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
      url: "http://localhost:8000/students/signup",
      header: {
        "Content-Type": "application/json",
      },
      data,
    };
    axios(requestParam)
      .then((response) => dispatch(registerSuccess("Register Successfully")))
      .catch((err) => dispatch(registerFailure(err)));
  };

  return (
    <div className="register-container flex">
      <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="logo" />
      <h2>Register</h2>
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
    </div>
  );
}

export default Register;
