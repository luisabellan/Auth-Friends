import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import "./EditFriends.css";

class EditFriends extends React.Component {
  state = {
    ...this.state,
    name: "",
    age: "",
    email: "",


  };

  option = (e) => {
    e.preventDefault()
    console.log(e);

    /* if(e.target === e.target){

    } */
  }
  handleChange = e => {
    
    this.setState({


      [e.target.name]: e.target.value
      
    });
  };

  add = e => {
    console.log(e);
    //e.preventDefault()

    // add in our login api call
    axiosWithAuth()
      .post("/friends", this.state)
      .then(res => {
        console.log(res);
        
        localStorage.setItem("token", res.data.payload);


      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.add}   /* formAction={this.option} value="form" */ >
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
            <button /* type="submit"  value="Add" */>Add</button>  
            <button /* type="submit"  formAction = {this.option}  */>Delete</button>   
          </div>
        </form>
      </div>
    );
  }
}

export default EditFriends;
