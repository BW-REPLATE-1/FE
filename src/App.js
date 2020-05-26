import React from 'react';
import SignUpForm from "./components/forms/SignUp";

import RDashboard from './components/restaurants/RDashboard';
import VDashboard from './components/volunteers/VDashboard';
import UpdateRestaurant from './components/forms/UpdateRestaurant';
import UpdateVolunteer from './components/forms/UpdateVolunteer';
import Login from './components/forms/Login';

function App() {
  return (
    <div className="App">
      <h1>replate</h1>
      <Login />
      <SignUpForm />
      <RDashboard />
      <VDashboard />
      <UpdateRestaurant />
      <UpdateVolunteer />
    </div>
  );
}

export default App;
