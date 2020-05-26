import React from "react";

let Login = () => {
  let { register, handleSubmit, errors, watch } = useForm();
  let onSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <label>
          Email:
          <br />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            ref={register({required: true})}
          ></input>
          {errors.email && <Err>⚠ Email is Required</Err>}
        </label>
        <label>
          Password:
          <br />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            ref={register({required: true})}
          ></input>
          {errors.password && <Err>⚠ Email is Required</Err>}
        </label>
      </form>
    </container>
  );
};

export default Login;
