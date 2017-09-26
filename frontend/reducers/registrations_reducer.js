import { merge } from 'lodash';
import RECEIVE_CURRENT_USER from '../actions/session_actions';
import {
  RECEIVE_REGISTRATION,
  RECEIVE_REMOVE_REGISTRATION
} from '../actions/registration_actions';

const RegistrationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
  //   case RECEIVE_CURRENT_USER:
  //     console.log("RECEIVED CURRENT USESRAFDAFDSAFSDAF");
  //     console.log(action.currentUser);
  //     action.currentUser.registrations.forEach(registration => {
  //       newState[registration.id] = registration;
  //     });
  //     console.log(newState);
  //     return newState;
    case RECEIVE_REGISTRATION:
      newState[action.registration.id] = action.registration;
      return newState;
    case RECEIVE_REMOVE_REGISTRATION:
      delete newState[action.registration.id];
      return newState;
    default:
      return state;
  }
};

export default RegistrationsReducer;