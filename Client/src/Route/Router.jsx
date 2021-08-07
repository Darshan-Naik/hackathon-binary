import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Navbar from "../Components/Navbar/Navbar";
import Register from "../Components/Register/Register";
import SearchResult from "../Components/SearchResult/SearchResult";
function Router() {
  return (
    <>
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
      </Switch>
    </>
  );
}

export default Router;
