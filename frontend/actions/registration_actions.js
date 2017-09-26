import { postRegistration, deleteRegistration } from '../util/registration_util';

export const RECEIVE_REGISTRATION = "RECEIVE_REGISTRATION";
export const RECEIVE_REMOVE_REGISTRATION = "RECEIVE_REMOVE_REGISTRATION";

  const receiveRegistration = (registration) => ({
    type: RECEIVE_REGISTRATION,
    registration
  });

  // const receiveRemoveRegistration = ()
