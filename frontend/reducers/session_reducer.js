import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_BOOKMARK,
  RECEIVE_REMOVE_BOOKMARK
} from '../actions/bookmark_actions';

const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, action.currentUser);
      if (action.currentUser !== null) {
        newState.bookmarkedEvents = {};
        action.currentUser.bookmarked_events.forEach(bookmarkedEvent => {
          newState.bookmarkedEvents[bookmarkedEvent.id] = bookmarkedEvent.id;
        });
        delete newState.bookmarked_events;
        delete newState.registrations;
        return { currentUser: newState };
      }
      return { currentUser: action.currentUser };
    case RECEIVE_BOOKMARK:
      newState = merge({}, state);
      if (newState.currentUser !== null) {
        newState.currentUser.bookmarkedEvents[action.bookmark.event_id] =
          action.bookmark.event_id;
      }
      return newState;
    case RECEIVE_REMOVE_BOOKMARK:
      newState = merge({}, state);
      if (newState.currentUser !== null) {
        delete newState.currentUser.bookmarkedEvents[action.bookmark.event_id];
      }
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
