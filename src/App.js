import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpForm from "./components/forms/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/forms/Login";
import PrivateRoute from "./util/PrivateRoute";

function App() {
	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		window.location.reload(false);
	};

	return (
		<div className="App">
			<Router>
				<h1>REplate</h1>
				<ul>
					{localStorage.getItem("token") === null ? (
						<>
							<h2>Login to your Dashboard</h2>
							<Link className="loginLink" to="/login">
								Login
							</Link>
							<Link className="signupLink" to="/signup">
								Sign Up
							</Link>
						</>
					) : (
						<div>
							<div>
								<button
									className="logout"
									onClick={logout}>
									logout
								</button>
							</div>
						</div>
					)}
				</ul>
				<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/login" component={Login} />
						<Route
							exact
							path="/signup"
							component={SignUpForm}
						/>
						<PrivateRoute
							exact
							path="/dashboard"
							component={Dashboard}
						/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
