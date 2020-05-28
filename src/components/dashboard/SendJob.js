import React, { useState } from "react";
import styled from 'styled-components';
import { axiosWithAuth } from "../../util/axiosWithAuth";

function SendJob() {
	const [userData, setUserData] = useState({
		username: "iampopcorn",
		password: "password11",
		email: "iampopcorn@gmail.com",
		phone_number: 3125559012,
		isBusiness: true
	})

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
			
		</div>
	)
}

export default SendJob;