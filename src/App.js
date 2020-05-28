import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpForm from "./components/forms/SignUp";
import RDashboard from "./components/restaurants/RDashboard";
import VDashboard from "./components/volunteers/VDashboard";
import UpdateRestaurant from "./components/forms/UpdateRestaurant";
import UpdateVolunteer from "./components/forms/UpdateVolunteer";
import Login from "./components/forms/Login";
import PrivateRoute from "./util/PrivateRoute";
import FoodForm from "./components/forms/FoodForm";

function App() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div className="App">
      <FoodForm />
      <Router>
        <h1>replate</h1>
        {/* <Login /> */}
      <SignUpForm />
      {/* <RDashboard /> */}
      {/* <VDashboard /> */}
      {/* <UpdateRestaurant /> */}
      <UpdateVolunteer />

        <ul>
          {localStorage.getItem("token") === null ? (
            <h2>Login to your Dashboard</h2>
          ) : (
            <div>
              <div>
                <div>
                  <Link to="/rdashboard">Restaurant Dashboard</Link>
                </div>
                <div>
                  <Link to="/vdashboard">Volunteer Dashboard</Link>
                </div>
                <button className="logout" onClick={logout}>
                  logout
                </button>
              </div>
            </div>
          )}
        </ul>
        <Switch>
          <PrivateRoute exact path="/rdashboard" component={RDashboard} />
          <PrivateRoute exact path="/vdashboard" component={VDashboard} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
