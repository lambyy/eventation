import { merge } from 'lodash';
import {
  RECEIVE_REGISTRATION,
  RECEIVE_REMOVE_REGISTRATION
} from '../actions/registration_actions';

const RegistrationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_REGISTRATION:
    console.log("REceived registraion!!!!");
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
