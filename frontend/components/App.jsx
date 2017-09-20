import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <NavBar />

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
