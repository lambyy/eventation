import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import { filterEvents } from '../../reducers/selectors';
import EventBrowse from './event_browse';


const mapStateToProps = (state, { location }) => ({
  events: filterEvents(state, location)
});


const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: (query) => dispatch(requestAllEvents(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventBrowse);
