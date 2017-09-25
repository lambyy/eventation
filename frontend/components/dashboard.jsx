import React from 'react';
import NavBar from './navbar/navbar';
import EventIndexContainer from './event/event_index_container';

const Dashboard = () => (
  <div className="dashboard">
    <NavBar dashboard={true}/>
    <div className="section parallax bg"></div>
    <div className="section static splash">
      <p>Find your next experience</p>
    </div>
    <EventIndexContainer className="section static"/>
  </div>
);

export default Dashboard;
