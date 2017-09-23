import { connect } from 'react-redux';
import { requestEvent, removeEvent } from '../../actions/event_actions';
import { clearErrors } from '../../actions/error_actions';
import EventShow from './event_show';

const mapStateToProps = (state, {match}) => ({
  event: state.entities.events[match.params.eventId],
  eventId: match.params.eventId
});

const mapDispatchToProps = (dispatch) => ({
  requestEvent: (id) => dispatch(requestEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
