import React from "react";
// import axios from "axios";
import styled from "styled-components";
import { useForm, ErrorMessage } from "react-hook-form";
import { waitForDomChange } from "@testing-library/react";

const Form = styled.form`
  font-size: 2em;
  background: #f1d1d1;
  color: #7d5a5a;
  margin: 100px 400px;
  padding: 70px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Fields = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
`;

let InputSpacer = styled.div`
  margin: 10px;
`;

let RadioContainer = styled.div`
  margin: 0px 20px;
  font-size: 0.7em;
  display: flex;
  justify-content: space-between;
`;

let Submit = styled.input`
  margin: 20px 0px;
  height: 40px;
  width: 400px;
  border-radius: 10px;
  font-size: 20px;
  transition: 0.5s;

  &:hover {
    background: #e79898;
    color: white;
  }
`;

let Err = styled.p`
  color: red;
  font-size: 0.5em;
`;

// let Radios = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

let SignUpForm = () => {
  let { register, handleSubmit, errors } = useForm();
  let onSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <br />
      <InputContainer>
        {/* <InputSpacer>
          <label>
            First Name:
            <br />
            <Fields
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              ref={register({ required: true, minLength: 2 })}
            ></Fields>
            {errors.firstName?.type === "required" && (
              <Err>⚠ Fist Name is Required</Err>
            )}
            {errors.firstName?.type === "minLength" && (
              <Err>⚠ Must be at least two characters</Err>
            )}
          </label>
        </InputSpacer>
        <InputSpacer>
          <label>
            Last Name:
            <br />
            <Fields
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              ref={register({ required: true, minLength: 2 })}
            ></Fields>
            {errors.lastName?.type === "required" && (
              <Err>⚠ Last Name is Required</Err>
            )}
            {errors.lastName?.type === "minLength" && (
              <Err>⚠ Must be at least two characters</Err>
            )}
          </label>
        </InputSpacer> */}

        <InputSpacer>
          <label>
            Company / Username:
            <br />
            <Fields
              id="company"
              type="text"
              name="username"
              placeholder="Company"
              ref={register({ required: true })}
            ></Fields>
            {errors.username && <Err>⚠ Your Company Is Required</Err>}
          </label>
        </InputSpacer>

        <InputSpacer>
          <label>
            Email:
            <br />
            <Fields
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              ref={register({ required: true })}
            ></Fields>
            {errors.email && <Err>⚠ Email is Required</Err>}
          </label>
        </InputSpacer>

        <InputSpacer>
          <label>
            Phone:
            <br />
            <Fields
              id="phone"
              type="number"
              name="phone_number"
              placeholder="Your Phone Number"
              ref={register({ required: true })}
            ></Fields>
            {errors.phone_number && <Err>⚠ Your Phone Number Is Required</Err>}
          </label>
        </InputSpacer>

        <InputSpacer>
          <label>
            Password:
            <br />
            <Fields
              id="pass"
              type="password"
              name="password"
              placeholder="Enter a Password"
              // Password (UpperCase, LowerCase and Number)
              ref={register({
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
              })}
            ></Fields>
            {errors.password && <Err>⚠ Password is Required</Err>}
          </label>
        </InputSpacer>

        <InputSpacer>
          <label>
            Address:
            <br />
            <Fields
              id="pass"
              type="text"
              name="address"
              placeholder="Your address"
              // Password (UpperCase, LowerCase and Number)
              ref={register({
                required: true,
              })}
            ></Fields>
            {errors.address && <Err>⚠ Address is Required</Err>}
          </label>
        </InputSpacer>

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
            validate: (value) => value === watch("password"),
          })}
        ></input>
        {errors.password2 && errors.password2 === "required" && (
          <p>You must retype your password</p>
        )}
      </label> */}

        <RadioContainer>
          {/* <Radios> */}
            <label>
              <input
                type="radio"
                value="true"
                name="isBusiness"
                ref={register}
              />
              Restaurant
            </label>
            <label>
              <input
                type="radio"
                value="false"
                name="isBusiness"
                ref={register}
              />
              Volunteer
            </label>
            {errors.isBusiness && <Err>⚠ Type of Business is Required</Err>}
          {/* </Radios> */}
        </RadioContainer>
      </InputContainer>
      <Submit type="submit"></Submit>
    </Form>
  );
};

export default SignUpForm;
