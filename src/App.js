import React from 'react';

import RDashboard from './components/restaurants/RDashboard';
import VDashboard from './components/volunteers/VDashboard';
import UpdateRestaurant from './components/forms/UpdateResturant';

function App() {
  return (
    <div className="App">
      <RDashboard />
      <VDashboard />
      <UpdateRestaurant />
    </div>
  );
}

export default App;
