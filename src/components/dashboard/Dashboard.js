import React, { useState } from "react";
import styled from 'styled-components';
import { axiosWithAuth } from "../../util/axiosWithAuth";
import ReceiveJob from './ReceiveJob';
import SendJob from './SendJob';
import UpdateRestaurant from '../forms/UpdateRestaurant';
import UpdateVolunteer from '../forms/UpdateVolunteer';

// Context
import { ReplateContext } from "../contexts/ReplateContext";

function Dashboard(props) {
	const [userData, setUserData] = useState({
		username: "iampopcorn",
		password: "password11",
		email: "iampopcorn@gmail.com",
		phone_number: 3125559012,
		isBusiness: false
	})

	console.log('dash', props)

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
			<h1>Hello {userData.username}</h1>
			

			{userData.isBusiness ? (
				<>
				<p>Use your dashboard to update your information or submit a job</p>
				<ReplateContext.Provider value={{ userData }}>
					<UpdateRestaurant /><SendJob />
				</ReplateContext.Provider>
				</>
			):(
				<>
				<p>Use your dashboard to accept a job</p>
				<ReplateContext.Provider value={{ userData }}>
					<UpdateVolunteer /><ReceiveJob />
				</ReplateContext.Provider>
				</>
			)}
		</div>
	)
}

export default Dashboard;