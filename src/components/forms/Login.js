import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import styled from 'styled-components';

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

const Fields = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
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

let Login = () => {
  let { register, handleSubmit, errors, watch } = useForm();
  let onSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <label>
          Email:
          <br />
          <Fields
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            ref={register({required: true})}
          ></Fields>
          {errors.email && <Err>⚠ Email is Required</Err>}
        </label>
        <label>
          Password:
          <br />
          <Fields
            id="password"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            ref={register({required: true})}
          ></Fields>
          {errors.password && <Err>⚠ Email is Required</Err>}
        </label>
        <Submit type="submit"/>
      </Form>
    </container>
  );
};

export default Login;
