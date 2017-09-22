import { connect } from 'react-redux';
import {
  createEvent,
  updateEvent,
  removeEvent
} from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state) => ({
  errors: state.errors.event
});

const mapDispatchToProps = (dispatch, { match }) => {
  const formType = (match.params.eventId) ? "edit" : "create";
  const processForm = ( formType === "edit" ) ? updateEvent : createEvent;
  return {
    processForm: (event) => dispatch(processForm(event)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
