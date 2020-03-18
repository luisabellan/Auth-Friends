import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import FriendsList from "./components/FriendList/FriendList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">

        <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
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
