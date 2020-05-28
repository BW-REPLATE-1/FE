import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Datepicker from "react-datepicker";

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

let Textarea = styled.textarea`
  height: 60px;
  width: 400px;
  border-radius: 10px;
  font-size: 20px;
`;

let Err = styled.p`
  color: red;
  font-size: 0.5em;
`;

let FoodForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  let { register, handleSubmit, errors } = useForm();

  let onSubmit = (data) => {
    console.log(data);
  };

  return (
    <container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Submit Pickup</h2>
        <label>
          Food Type:
          <br />
          <Fields
            id="foodType"
            type="text"
            name="foodType"
            placeholder="What food are you trying to donate?"
            ref={register({ required: true })}
          ></Fields>
          {errors.foodType && (
            <Err>⚠ You must let us know what type of food</Err>
          )}
        </label>

        <label>
          Amount Of Food:
          <br />
          <Fields
            id="foodAmount"
            type="number"
            name="foodAmount"
            placeholder="Quantity of food"
            ref={register({ required: true })}
          ></Fields>
          {errors.foodAmount && (
            <Err>⚠ You must input the quantity of food</Err>
          )}
        </label>

        <label>
          Description:
          <br />
          <Textarea
            id="description"
            type="text"
            name="description"
            placeholder="Describe your food donation"
            ref={register}
          ></Textarea>
        </label>

        <label>
          Day and Time:
          <Datepicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </label>

        <Submit type="submit" />
      </Form>
    </container>
  );
};

export default FoodForm;
