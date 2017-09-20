import { postUser, postSession, deleteSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (currentUser) => {
  if (currentUser) {
    const { id, first_name, last_name } = currentUser;
    currentUser = { id, first_name, last_name };
  }

  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = (formUser) => dispatch => (
  postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = (formUser) => dispatch => (
  postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  deleteSession()
    .then(user => dispatch(receiveCurrentUser(null)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
