import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import "./EditFriends.css";

const EditFriends = (props) => {
  const [friend, setFriend] = useState({
    
    name: "",
    age: "",
    email: "",
    
    
    
  });

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const add = e => {
    //console.log(e)
    //e.preventDefault()

    // add in our login api call
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        console.log(res);

      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteFriend = (e) => {
    //e.preventDefault()
    console.log("deleteFriend")

    // add in our login api call
    axiosWithAuth()
      .post("/friends/:id", friend)
      .then(res => {
        console.log(res);

        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
  
      <div className="form">
        <form onSubmit={add}>
          <div className="name">
            <label>
              username:
              <input
                type="text"
                className="name"
                name="name"
                value={friend.name}
                onChange={handleChange}
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
                value={friend.age}
                onChange={handleChange}
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
                value={friend.email}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="button">
            <button>Add</button>
          </div>
        </form>
      </div>

   
  );
};

export default EditFriends;
