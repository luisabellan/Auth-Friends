import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import FriendsList from "./components/FriendsList/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">

        <nav>
        <ul>
          <li>
            <NavLink to="/login"><span>Login</span></NavLink>
          </li>
          <li>
            <NavLink to="/friends"><span>Friends</span></NavLink>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends"  component={FriendsList}  />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>

        </nav>
        
      </div>
    </Router>
  );
}

export default App;
