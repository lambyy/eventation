import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveCurrentUser } from './actions/session_actions';

import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;
// import { requestAllEvents, requestEvent, createEvent, updateEvent, removeEvent } from './actions/event_actions';
// window.requestAllEvents = requestAllEvents;
// window.requestEvent = requestEvent;
// window.createEvent = createEvent;
// window.updateEvent = updateEvent;
// window.removeEvent = removeEvent;
import { createRegistration, removeRegistration } from './actions/registration_actions';
window.createRegistration = createRegistration;
window.removeRegistration = removeRegistration;


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore();
    store.dispatch(receiveCurrentUser(window.currentUser));

    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

// todo: remove testing stuff
