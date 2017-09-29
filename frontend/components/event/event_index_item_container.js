import { connect } from 'react-redux';
import {
  createBookmark,
  removeBookmark
} from '../../actions/bookmark_actions';
import { hasBookmark } from '../../reducers/selectors';
import EventIndexItem from './event_index_item';

const mapStateToProps = (state, props) => ({
  bookmarked: hasBookmark(state, props.event.id)
});

const mapDispatchToProps = (dispatch) => ({
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  removeBookmark: (eventId) => dispatch(removeBookmark(eventId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexItem);
