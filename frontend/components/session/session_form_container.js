import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = ( formType === "login" ) ? login : signup;
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(processForm(user)),
    signInDemo: (user) => dispatch(login(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
