import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './navbar/navbar';
import SessionFormContainer from './session/session_form_container';
import EventFormContainer from './event/event_form_container';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/events/create" component={EventFormContainer} />
      <ProtectedRoute path="/events/:eventId/edit" component={EventFormContainer} />
    </Switch>
  </div>
);

export default App;
