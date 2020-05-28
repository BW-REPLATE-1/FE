import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { axiosWithAuth } from "../../util/axiosWithAuth";

function ReceiveJob(props) {
	const [isChecked, setIsChecked] = useState(false)
	const [jobData, setJobData] = useState([
	{
		id: 1,
		food_type: "pulled pork",
		food_amount: 4,
		description: "4 pans of bbq pulled pork",
		pickup_time: "Tuesday 5:00pm",
		completed: true,
		business_id: 1,
		assigned_pickup: null
	},
	{
		id: 2,
		food_type: "beef",
		food_amount: 4,
		description: "4 pans of bbq beef",
		pickup_time: "Wednesday 5:00pm",
		completed: true,
		business_id: 1,
		assigned_pickup: false
	}
])
	console.log('rjob', props)

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

	function handleChecked (e) {
		e.preventDefault();
		setIsChecked(true);
	}

	useEffect(() => {
		if (isChecked) {
			setJobData({assigned_pickup: true})
		}
	})

	return (
		<div>
			<h1>Available Pick Ups</h1>
			{jobData.map((job) => (
				<>
				<p>Job Number: {job.id}</p>
				<p>Food Type: {job.food_type}</p>
				<p>Food Amount: {job.food_amount}</p>
				<p>Description: {job.description}</p>
				<p>Pick Up Time: {job.pickup_time}</p>
				<input type="checkbox" onChange={ handleChecked }/> Accept?
				<br />
				<br />
				</>
				
			))}
			
		</div>
	)
}

export default ReceiveJob;