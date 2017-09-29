import React from 'react';
import EventBrowseFilter from './event_browse/event_browse_filter';
import EventIndexItemContainer from './event_index_item_container';

class EventBrowse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      event_type: ""
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  componentWillMount() {
    this.props.requestAllEvents("all");
  }

  updateQuery(type) {
    return (e) => {
      e.preventDefault();
      if (type === "category" && this.state.category === e.target.textContent) {
        e.target.textContent = "";
      } else if (type === "event_type" && this.state.event_type === e.target.textContent) {
        e.target.textContent = "";
      }

      this.setState({ [type]: e.target.textContent }, () => {
        const { category, event_type } = this.state;
        const categoryQuery = (category) ? `category=${category}` : '';
        const eventTypeQuery = (event_type) ? `event_type=${event_type}` : '';
        let queryStr = '';
        if (categoryQuery && eventTypeQuery) {
          queryStr = `?${categoryQuery}%${eventTypeQuery}`;
        } else if (categoryQuery) {
          queryStr = `?${categoryQuery}`;
        } else if (eventTypeQuery) {
          queryStr = `?${eventTypeQuery}`;
        }

        this.props.history.push(`/events/browse${queryStr}`);
        // this.props.requestAllEvents({ query: this.state });
      });
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="event-browse">
        <EventBrowseFilter
          updateQuery={this.updateQuery}
          state={this.state}/>
        {this.props.events.map( event => (
          <EventIndexItemContainer key={event.id} event={event} />
        ))}

      </div>
    );
  }
}

export default EventBrowse;
