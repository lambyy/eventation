import { connect } from 'react-redux';
import { requestEvent, removeEvent } from '../../actions/event_actions';
import { createRegistration } from '../../actions/registration_actions';
import { createBookmark, removeBookmark } from '../../actions/bookmark_actions';
import { clearErrors } from '../../actions/error_actions';
import { selectTickets, hasBookmark } from '../../reducers/selectors';
import EventShow from './event_show';

const mapStateToProps = (state, {match}) => {
  const event = state.entities.events[match.params.eventId];
  const tickets = (event && event.tickets) ? selectTickets(state, event.tickets) : [];

  return ({
    currentUser: state.session.currentUser,
    event,
    tickets,
    eventId: match.params.eventId,
    errors: state.errors.event,
    bookmarked: hasBookmark(state, match.params.eventId)
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestEvent: (id) => dispatch(requestEvent(id)),
  createRegistration: (registration) =>
    dispatch(createRegistration(registration)),
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  removeBookmark: (eventId) => dispatch(removeBookmark(eventId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
