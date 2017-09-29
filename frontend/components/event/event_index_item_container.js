import { connect } from 'react-redux';
// import { requestAllEvents } from '../../actions/event_actions';
import { hasBookmark } from '../../reducers/selectors';
import EventIndexItem from './event_index_item';

const mapStateToProps = (state, props) => ({
  bookmarked: hasBookmark(state, props.event.id)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexItem);
