import React from 'react';
import EventImageUpload from './event_image_upload';

const _categoryList = "Business Sports&Fitness Music Science&Tech Arts Food&Drink Travel&Outdoor Holiday Other";
const _eventTypeList = "Class Performance Party Networking Concert Festival Attraction Game Gala Convention Other";
const _categories = _categoryList.split(" ");
const _eventTypes = _eventTypeList.split(" ");

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
        <label>EVENT TITLE</label>
        <br/>
        <input type="text" value={title}
               onChange={update("title")}
               placeholder="Give it a short distinct name"
        />
        <br/>
        <label>LOCATION</label>
        <br/>
        <input type="text" value={location}
               onChange={update("location")}
               placeholder="Specify where event will be"/>

        <div className="event-time">
          <label>STARTS</label>
          <label>ENDS</label>

          <input type="datetime-local"
                 value={start_date.slice(0, 16)}
                 onChange={update("start_date")}/>


          <input type="datetime-local"
                 value={end_date.slice(0, 16)}
                 onChange={update("end_date")}/>
        </div>

        <label>EVENT IMAGE</label>
        <br/>
        <EventImageUpload
          updateImageURL={updateImageURL}
          imageUrl={image_url}
        />
        <br/>
        <label>EVENT DESCRIPTION</label>
        <br/>
        <textarea value={description}
                  onChange={update("description")}></textarea>
        <br/>
        <label>EVENT TYPE</label>
        <br/>
        <select value={event_type} onChange={update("event_type")}>
          <option value="1" disabled>Select the type of event</option>
          {this.renderEventTypeOptions()}
        </select>

        <br/>
        <label>EVENT TOPIC</label>
        <br/>
        <select value={category} onChange={update("category")}>
          <option value="1" disabled>Select a topic</option>
          {this.renderCategoryOptions()}
        </select>
      </div>
    );
  }
}

export default DetailForm;
