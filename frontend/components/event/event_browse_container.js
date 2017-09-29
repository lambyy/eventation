import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import { filterEvents } from '../../reducers/selectors';
import EventBrowse from './event_browse';


const mapStateToProps = (state, { location }) => {
  const filtered = filterEvents(state, location);

  return ({

    events: state.entities.events
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: (query) => dispatch(requestAllEvents(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventBrowse);
