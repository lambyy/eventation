import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = (state) => ({
  events: state.entities.events
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: () => dispatch(requestAllEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
