import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './navbar/navbar';
import SessionFormContainer from './session/session_form_container';
import EventFormContainer from './event/event_form_container';
import EventShowContainer from './event/event_show_container';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/events/create" component={EventFormContainer} />
      <Route exact path="/events/:eventId" component={EventShowContainer} />
      <ProtectedRoute path="/events/:eventId/edit" component={EventFormContainer} />
    </Switch>
  </div>
);

export default App;
