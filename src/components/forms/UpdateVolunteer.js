import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import styled from "styled-components";

function UpdateVolunteer() {
	const [volunteerData, setVolunteerData] = useState({
		contact: "Jim",
		email: "email@email.com",
		id: Date.now()
	});
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => setVolunteerData(data);

	useEffect(() => {
		console.log('volunteer', volunteerData)
	}, [handleSubmit(onSubmit)])
	


	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get("/volunteer")
	// 		.then((res) => {
	// 			setVolunteerData(res.data);
	// 		});
	// }, []);


	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder={volunteerData.contact} name="Contact" ref={register({required: true, maxLength: 80})} />
			<input type="text" placeholder={volunteerData.email} name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
			{errors.Email && <span>This Field is Required and use example@example.com format</span>}

			<input type="submit" />
			</form>
		</>
	);
}

export default UpdateVolunteer;