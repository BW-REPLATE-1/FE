import React, { useState } from "react";
import styled from 'styled-components';
//import { axiosWithAuth } from "../../util/axiosWithAuth";
import { useForm, ErrorMessage } from "react-hook-form";
import FoodForm from "../forms/FoodForm";


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

	return (
		<div>
			<FoodForm />
		</div>
	)
}

export default SendJob;