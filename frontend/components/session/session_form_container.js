import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = ( formType === "login") ? login : signup;
  const guestUser = {email: "guest@example.com", password: "123456"};
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(processForm(user)),
    signInDemo: (user) => dispatch(login(user)),
    guestUser,
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);