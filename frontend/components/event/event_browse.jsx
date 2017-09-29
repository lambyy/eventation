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
      let textContent = e.target.textContent;
      if (type === "category" && this.state.category === textContent) {
        textContent = "";
      } else if (type === "event_type" && this.state.event_type === textContent) {
        textContent = "";
      }

      this.setState({ [type]: textContent }, () => {
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
        this.props.requestAllEvents({ query: this.state });
      });
    };
  }

  render() {
    console.log(this.props.events);
    return (
      <div className="event-browse">
        <EventBrowseFilter
          updateQuery={this.updateQuery}
          state={this.state}/>
        <div className="browse-index">

          {this.props.events.map( event => (
            <EventIndexItemContainer key={event.id} event={event} />
          ))}
        </div>

      </div>
    );
  }
}

export default EventBrowse;
