import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logOut } from "../../Redux/Auth/action";
import "../../Styles/Navbar/Navbar.css";

function Navbar() {
  const history = useHistory();
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logOut());
  };
  console.log(isAuth, user);
  return (
    <nav className="flex nav-container">
      <div className="logo-container" onClick={() => history.push("/")}>
        <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="logo" />
      </div>
      <div className="nav-menu-container flex">
        <Link to="/news">News</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/articles">Articles</Link>
      </div>
      <div className="login-button-container flex">
       {isAuth && <Link to={"/profile/user/"+user._id}>{user.name}</Link>}
        {isAuth ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={() => history.push("/login")}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
