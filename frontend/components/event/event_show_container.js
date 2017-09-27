import { connect } from 'react-redux';
import { requestEvent, removeEvent } from '../../actions/event_actions';
import { createRegistration } from '../../actions/registration_actions';
import { clearErrors } from '../../actions/error_actions';
import { selectTickets } from '../../reducers/selectors';
import EventShow from './event_show';

const mapStateToProps = (state, {match}) => {
  const event = state.entities.events[match.params.eventId];
  const tickets = (event && event.tickets) ? selectTickets(state, event.tickets) : [];

  return ({
    event,
    tickets,
    eventId: match.params.eventId,
    errors: state.errors.event
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestEvent: (id) => dispatch(requestEvent(id)),
  createRegistration: (registration) =>
    dispatch(createRegistration(registration))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
