import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import './Login.css'

const Login = (props) => {

  const [credentials, setCredentials] = useState({})
  const[isLoading, setIsLoading] = useState(false)



  
  const login = e => {
    e.preventDefault();
    

    // add in our login api call
    axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
     
      // nice for UX, auto redirect to the main dash
      props.history.push("/friends");
    })
    .catch(err => {
      console.log(err);
    });
   
  };
  
  const handleChange = e => {
    setCredentials({
  
        ...credentials,
        [e.target.name]: e.target.value,
      
    });
  };
  
    return (
      <div className="form">
        <form onSubmit={login}>
          <div className="username"><label>username:<input
            type="text"
            className="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          /></label></div>

          <div className="password">

            <label>password:<input
                type="password"
                className="password"

                name="password"
                value={credentials.password}
                onChange={handleChange}
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


export default Login;
