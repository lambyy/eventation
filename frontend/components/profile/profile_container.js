import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import { removeRegistration } from '../../actions/registration_actions';
import { selectEvents, selectRegistrations } from '../../reducers/selectors';
import Profile from './profile';

const mapStateToProps = (state, { match }) => ({
  currentUser: state.session.currentUser,
  type: match.params.filter,
  events: selectEvents(state, match.params.filter),
  registrations: selectRegistrations(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: (filter) => dispatch(requestAllEvents(filter)),
  removeRegistration: (id) => dispatch(removeRegistration(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
