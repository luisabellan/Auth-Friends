import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import "./SendForm.css";

class SendForm extends React.Component {
  state = {
    ...this.state,
    name: "",
    age: "",
    email: "",
    
  };

  handleChange = e => {
    this.setState({
      
        ...this.state,
        [e.target.name]: e.target.value
      
    });
  };

  send = e => {
   // e.preventDefault();

    // add in our login api call
    axiosWithAuth()
      .post("/friends", this.state)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        // nice for UX, auto redirect to the main dash
       // this.props.history.push("/friends"); 
       //window.location.reload()
      
       
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.send}>
          <div className="name">
            <label>
              username:
              <input
                type="text"
                className="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="age">
            <label>
              age:
              <input
                type="text"
                className="age"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="email">
            <label>
            email:
              <input
                type="email"
                className="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="button">
            <button>Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SendForm;
