import React, { useState } from "react";
import styled from 'styled-components';
//import { axiosWithAuth } from "../../util/axiosWithAuth";
import { useForm, ErrorMessage } from "react-hook-form";


function SendJob(props) {
	const [jobData, setJobData] = useState({
		id: 1,
		food_type: "pulled pork",
		food_amount: 4,
		description: "4 pans of bbq pulled pork",
		pickup_time: "Tuesday 5:00pm",
		completed: true,
		business_id: 1,
		assigned_pickup: 1
	})

	console.log('jobdata', jobData)

	let { register, handleSubmit, errors } = useForm();
	let onSubmit = (userData) => {
		console.log(userData);
		setJobData(userData)
		// axiosWithAuth()
		// .post('/login', userData)
		// .then((res) => {
		// 			console.log("res ", res);
		// 			localStorage.setItem("token", res.data.token);
		// 			props.history.push("/dashboard");
		// 		})
		// .catch(err => console.log('axios login err', err))
		// .finally(() => window.location.reload())
	};

	// useEffect(() => {
	// 	axiosWithAuth()
	// 	.get('/user')
	// 	.then(res => {
	// 		console.log(res)
	// 	})
	// 	.catch(err => {
	// 		console.log(err)
	// 	})

	// }, [])

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


	return (
		<div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<h1>Submit Pickup</h1>
				<label>
					Type of Food:
				<br />
					<Fields
						id="food_type"
						type="text"
						name="food_type"
						placeholder="Pork Fried Rice"
						ref={register({ required: true })}
					></Fields>
					{errors.food_type && <Err>⚠ Type of Food is Required</Err>}
				</label>
				<label>
					Amount of Food:
				<br />
					<Fields
						id="food_amount"
						type="text"
						name="food_amount"
						placeholder="5 pans"
						ref={register({ required: true })}
					></Fields>
				</label>
				<label>
					Description:
				<br />
					<Fields
						id="description"
						type="text"
						name="description"
						placeholder="at front desk"
						ref={register({ required: true })}
					></Fields>
				</label>
				<label>
					When:
				<br />
					<Fields
						id="pickup_time"
						type="text"
						name="pickup_time"
						placeholder="Tuesday 2:00pm"
						ref={register({ required: true })}
					></Fields>
				</label>
				<Submit type="submit" />
			</Form>
		</div>
	)
}

export default SendJob;