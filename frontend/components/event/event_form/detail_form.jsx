import React from 'react';
import EventImageUpload from './event_image_upload';

const _categories = "Music Arts Food&Drink Other".split(" ");
const _eventTypes = "Class Concert Performance Other".split(" ");

class DetailForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEventTypeOptions() {
    const eventTypeOptions = _eventTypes.map( (eventType, idx) => {
      return (
        <option key={idx} value={eventType}>{eventType}</option>
      );
    });
    return eventTypeOptions;
  }

  renderCategoryOptions() {
    const categoryOptions = _categories.map( (category, idx) => {
      const optionText = category.split("&").join(" & ");
      return (
        <option key={idx} value={category}>{optionText}</option>
      );
    });
    return categoryOptions;
  }

  render() {
    const { title, location, image_url, description, start_date,
            end_date, event_type, category } = this.props.state;
    const { update, updateImageURL } = this.props;

    return (
      <div className="detail-form">
        <label>
          EVENT TITLE
          <br/>
          <input type="text" value={title}
              onChange={update("title")}
              placeholder="Give it a short distinct name"/>
        </label>
        <br/>
        <label>
          LOCATION
          <br/>
          <input type="text" value={location}
              onChange={update("location")}
              placeholder="Specify where event will be"/>
        </label>

          <div className="event-time">
            <label>
              STARTS
              <br/>
              <input type="datetime-local" value={start_date.slice(0, 16)}
                onChange={update("start_date")}/>
            </label>
            <br/>
            <label>
              ENDS
              <br/>
              <input type="datetime-local" value={end_date.slice(0, 16)}
                onChange={update("end_date")}/>
            </label>
          </div>

        <label>
          EVENT IMAGE
          <br/>
          <EventImageUpload updateImageURL={updateImageURL}
              imageUrl={image_url} />
        </label>
        <br/>
        <label>
          EVENT DESCRIPTION
          <br/>
          <textarea value={description}
              onChange={update("description")}></textarea>
        </label>
        <br/>
        <label>
          EVENT TYPE
          <br/>
          <select value={event_type} onChange={update("event_type")}>
            <option value="1" disabled>Select the type of event</option>
            {this.renderEventTypeOptions()}
          </select>
        </label>
        <br/>
        <label>
          EVENT TOPIC
          <br/>
          <select value={category} onChange={update("category")}>
            <option value="1" disabled>Select a topic</option>
            {this.renderCategoryOptions()}
          </select>
        </label>
      </div>
    );
  }
}

export default DetailForm;
