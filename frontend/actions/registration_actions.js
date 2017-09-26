import { postRegistration, deleteRegistration } from '../util/registration_util';

export const RECEIVE_REGISTRATION = "RECEIVE_REGISTRATION";
export const RECEIVE_REMOVE_REGISTRATION = "RECEIVE_REMOVE_REGISTRATION";

const receiveRegistration = (registration) => ({
  type: RECEIVE_REGISTRATION,
  registration
});

const receiveRemoveRegistration = (registration) => ({
  type: RECEIVE_REMOVE_REGISTRATION,
  registration
});

export const createRegistration = (formRegistration) => dispatch => {
  postRegistration(formRegistration)
    .then(registration => dispatch(receiveRegistration(registration)));
};

export const removeRegistration = (id) => dispatch => {
  deleteRegistration(id)
    .then(registration => dispatch(receiveRemoveRegistration(registration)));
}
