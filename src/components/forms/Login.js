import React from "react";


let Login = () => {
  return (
    <container>
      <form>
          <h1>Sign In</h1>
          <label>
            Email:
            <br/>
              <input id="email" type="email" name="email"></input>
          </label>
          <label>
            Password:
            <br/>
              <input id="password" type="email" name="email"></input>
          </label>
      </form>
    </container>
  );
};

export default Login;
