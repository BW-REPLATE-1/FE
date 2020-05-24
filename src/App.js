import React from 'react';

import RDashboard from './components/restaurants/RDashboard';
import VDashboard from './components/volunteers/VDashboard';
import UpdateRestaurant from './components/forms/UpdateRestaurant';
import UpdateVolunteer from './components/forms/UpdateVolunteer';

function App() {
  return (
    <div className="App">
      <RDashboard />
      <VDashboard />
      <UpdateRestaurant />
      <UpdateVolunteer />
    </div>
  );
}

export default App;
