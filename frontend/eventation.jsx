import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveCurrentUser } from './actions/session_actions';

import { createBookmark, removeBookmark } from './actions/bookmark_actions';
window.createBookmark = createBookmark;
window.removeBookmark = removeBookmark;


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
