import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';
import Profile from './profile';

const mapStateToProps = (state, { match }) => ({
  currentUser: state.session.currentUser,
  type: match.params.filter,
  events: selectEvents(state, match.params.filter)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: (filter) => dispatch(requestAllEvents(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
