import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import './Login.css'

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    // add in our login api call
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        // nice for UX, auto redirect to the main dash
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.login}>
          <div className="username"><label>username:<input
            type="text"
            className="username"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          /></label></div>

          <div className="password">

            <label>password:<input
                type="password"
                className="password"

                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="button">

            <button>Log in</button>

          </div>


        </form>
      </div>
    );
  }
}

export default Login;
