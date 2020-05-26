import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import styled from "styled-components";

function UpdateRestaurant() {
	const [restaurantData, setRestaurantData] = useState({
		company: "",
		contact: "",
		email: "",
		location: "",
		id: ""
	});
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => setRestaurantData(data);

	useEffect(() => {
		console.log(restaurantData)
	}, [handleSubmit(onSubmit)])
	


	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get("/restaurant")
	// 		.then((res) => {
	// 			setRestaurantData(res.data);
	// 		});
	// }, []);


	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder={restaurantData.company} name="Company" ref={register({required: true, maxLength: 80})} />
			<input type="text" placeholder={restaurantData.contact} name="Contact" ref={register({required: true, maxLength: 80})} />
			<input type="text" placeholder={restaurantData.email} name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
			{errors.Email && <span>This Field is Required and use example@example.com format</span>}
			<input type="text" placeholder={restaurantData.location} name="Location" ref={register({required: true, maxLength: 80})} />

			<input type="submit" />
			</form>
		</>
	);
}

export default UpdateRestaurant;
