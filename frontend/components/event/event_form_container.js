import { connect } from 'react-redux';
import {
  requestEvent,
  createEvent,
  updateEvent,
  removeEvent
} from '../../actions/event_actions';
import { clearErrors } from '../../actions/error_actions';
import EventForm from './event_form';

const mapStateToProps = (state, { match }) => {
  let event;
  if (state.entities.events[match.params.eventId]) {
    event = state.entities.events[match.params.eventId];
  }

  return {
    event,
    currentUser: state.session.currentUser,
    errors: state.errors.event
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  const formType = (match.params.eventId) ? "edit" : "create";
  const processForm = ( formType === "edit" ) ? updateEvent : createEvent;
  return {
    clearErrors: () => dispatch(clearErrors()),
    requestEvent: (id) => dispatch(requestEvent(id)),
    processForm: (event) => dispatch(processForm(event)),
    eventId: match.params.eventId,
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
