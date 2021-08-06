import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
function Router() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/login"></Route>
          <Route exact path="/register"></Route>
        </Switch>
      </>
    );
}

export default Router
