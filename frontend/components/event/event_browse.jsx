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
    this.renderEvents = this.renderEvents.bind(this);
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

  renderEvents() {
    if (this.props.events.length === 0) {
      return (
        <div>No Events Found</div>
      );
    } else {
      const events = this.props.events.map( event => (
        <EventIndexItemContainer key={event.id} event={event} />
      ));
      return events;
    }
  }

  render() {
    const { category, event_type } = this.state;
    let filterStr = "ALL";
    if (category && event_type) {
      filterStr = `${category.toUpperCase()}, ${event_type.toUpperCase()}`;
    } else if (category) {
      filterStr = `${category.toUpperCase()}`;
    } else if (event_type) {
      filterStr = `${event_type.toUpperCase()}`;
    }

    return (
      <div className="event-browse">
        <EventBrowseFilter
          updateQuery={this.updateQuery}
          state={this.state}/>
        <div className="browse-index">
          <div className="header">Filter Events by: <h3>{filterStr}</h3></div>
          {this.renderEvents()}
        </div>

      </div>
    );
  }
}

export default EventBrowse;
