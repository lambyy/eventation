import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBar from './navbar/navbar';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
