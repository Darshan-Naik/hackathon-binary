import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MentorLogin from "../Components/MentorLogin/MentorLogin";
import MentorRegister from "../Components/MentorRegister/MentorRegister";
import Navbar from "../Components/Navbar/Navbar";
import Register from "../Components/Register/Register";
import UserProfile from "../Components/UserProfile/UserProfile";
import SearchResult from "../Components/SearchResult/SearchResult";
function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/search/:query">
          <Navbar />
          <SearchResult />
        </Route>
        <Route exact path="/mentor-login">
          <MentorLogin />
        </Route>
        <Route exact path="/mentor-register">
          <MentorRegister />
        </Route>
        <Route exact path="/user-profile">
          <Navbar />
          <UserProfile />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
