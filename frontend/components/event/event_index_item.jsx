import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import EventItemDigest from './event_index_item/event_item_digest';
import EventItemExtra from './event_index_item/event_item_extra';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleBookmark() {
    const { event } = this.props;
    if (this.props.currentUser) {
      if (this.props.bookmarked) {
        this.props.removeBookmark(event.id);
      } else {
        this.props.createBookmark(event.id);
      }
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    const { event, bookmarked } = this.props;

    return (
      <div className="event-index-item">
        <Link to={`/events/${event.id}`} className="event-item-image">
          <img src={event.image_url}/>
        </Link>
        <Link to={`/events/${event.id}`}>
          <EventItemDigest event={event}/>
        </Link>
        <EventItemExtra bookmarked={bookmarked} toggleBookmark={this.toggleBookmark}/>
      </div>
    );
  }
}

export default withRouter(EventIndexItem);
