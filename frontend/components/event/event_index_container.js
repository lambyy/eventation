import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import { selectAllEvents } from '../../reducers/selectors';
import EventIndex from './event_index';

const mapStateToProps = (state) => ({
  events: selectAllEvents(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: (filter) => dispatch(requestAllEvents(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
