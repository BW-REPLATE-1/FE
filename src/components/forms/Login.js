import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import styled from 'styled-components';
import { axiosWithAuth } from '../../util/axiosWithAuth';

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

let Login = (props) => {
  let { register, handleSubmit, errors, watch } = useForm();
  let onSubmit = (userData) => {
    console.log(userData);
    axiosWithAuth()
      .post('/login', userData)
      .then((res) => {
				console.log("res ", res);
				localStorage.setItem("token", res.data.token);
				props.history.push("/dashboard");
			})
      .catch(err => console.log('axios login err', err))
      .finally(() => window.location.reload())
  };

  return (
    <container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <label>
          Username:
          <br />
          <Fields
            id="username"
            type="text"
            name="username"
            placeholder="Enter Your Username"
            ref={register({required: true})}
          ></Fields>
          {errors.email && <Err>⚠ Username is Required</Err>}
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
