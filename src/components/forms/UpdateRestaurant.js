import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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

function UpdateRestaurant() {
  const [restaurantData, setRestaurantData] = useState({
    company: "",
    contact: "",
    email: "",
    location: "",
    id: "",
  });
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => setRestaurantData(data);

  useEffect(() => {
    console.log(restaurantData);
  }, [handleSubmit(onSubmit)]);

  // useEffect(() => {
  // 	axiosWithAuth()
  // 		.get("/restaurant")
  // 		.then((res) => {
  // 			setRestaurantData(res.data);
  // 		});
  // }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fields
          type="text"
          placeholder={restaurantData.company}
          name="Company"
          ref={register({ required: true, maxLength: 80 })}
        />
        <Fields
          type="text"
          placeholder={restaurantData.contact}
          name="Contact"
          ref={register({ required: true, maxLength: 80 })}
        />
        <Fields
          type="text"
          placeholder={restaurantData.email}
          name="Email"
          ref={register({
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.Email && (
          <Err>This Field is Required and use example@example.com format</Err>
        )}
        <Fields
          type="text"
          placeholder={restaurantData.location}
          name="Location"
          ref={register({ required: true, maxLength: 80 })}
        />

        <Submit type="submit" />
      </Form>
    </div>
  );
}

export default UpdateRestaurant;
