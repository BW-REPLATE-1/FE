import React from "react";
// import axios from "axios";
import { useForm } from "react-hook-form";

let SignUpForm = () => {
  let { register, handleSubmit, errors} = useForm();
  let onSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <hr />
      <label>
        First Name:
        <br />
        <input
          id="fn"
          type="text"
          name="firstName"
          placeholder="Enter Your First Name"
          ref={register({ required: true, minLength: 2 })}
        ></input>
        {errors.firstName && errors.firstname.value === "required" && (
          <p>Fist Name is Required</p>
        )}
        {errors.firstName && errors.firstname.value === "minLength" && (
          <p>Must be at least two characters</p>
        )}
      </label>
      <label>
        Last Name:
        <br />
        <input
          id="ln"
          type="text"
          name="lastName"
          placeholder="Enter Your Last Name"
          ref={register({ required: true, minLength: 2 })}
        ></input>
        {errors.lastName && errors.lastName.value === "required" && (
          <p>Last Name is Required</p>
        )}
        {errors.lastName && errors.lastName.value === "minLength" && (
          <p>Must be at least two characters</p>
        )}
      </label>
      <label>
        Email:
        <br />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          ref={register({ reqired: true })}
        ></input>
        {errors.email && <p>Email is Required</p>}
      </label>
      <label>
        Company:
        <br />
        <input
          id="company"
          type="text"
          name="company"
          placeholder="Company"
          ref={register({ required: true })}
        ></input>
        {errors.company && <p>Your Company Is Required</p>}
      </label>
      <label>
        Password:
        <br />
        <input
          id="pass"
          type="password"
          name="password1"
          placeholder="Enter a Password"
          ref={register({ required: true })}
        ></input>
        {errors.password1 && <p>Password is Required</p>}
      </label>
      {/* <label>
        ReEnter Password:
        <br />
        <input
          id="pass2"
          type="password"
          name="password2"
          placeholder="ReEnter your Password"
          ref={register({
            required: true,
            // validate: (value) => {
            //   if (value === getValues()["password"]) {
            //     return true;
            //   } else {
            //     return "The passwords do not match";
            //   }
            // },
          })}
        ></input>
        {errors.password2 && errors.password2 === "required" && (
          <p>You must retype your password</p>
        )}
      </label> */}
      <label>
        <input type="radio" value="restaurant" name="suType"></input>
        Restaurant
      </label>
      <label>
        <input type="radio" value="volunteer" name="suType"></input>
        Volunteer
      </label>
      <input type="submit"></input>
    </form>
  );
};

export default SignUpForm;
