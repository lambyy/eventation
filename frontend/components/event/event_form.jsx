import React from 'react';

const _categories = "Music Arts Food&Drink Other".split(" ");
const _eventTypes = "Class Concert Performance Other".split(" ");

class EventForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      organizer_id: this.props.currentUser.id,
      title: "",
      location: "",
      start_date: "",
      end_date: "",
      image_url: "",
      description: "",
      event_type: "1",
      category: "1"
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.renderDetailForm = this.renderDetailForm.bind(this);
    this.renderEventTypeOptions = this.renderEventTypeOptions.bind(this);
    this.renderCategoryOptions = this.renderCategoryOptions.bind(this);

  }

  update(type) {
    return (e) => {
      e.preventDefault();
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  renderDetailForm() {
    const { title, location, image_url, description,
            event_type, category } = this.state;

    return (
      <div className="detail-form">
        <label>
          EVENT TITLE
          <br/>
          <input type="text" value={title}
              onChange={this.update("title")}
              placeholder="Give it a short distinct name"/>
        </label>
        <br/>
        <label>
          LOCATION
          <br/>
          <input type="text" value={location}
              onChange={this.update("location")}
              placeholder="Specify where event will be"/>
        </label>

          <div className="event-time">
            <label>
              STARTS
              <br/>
              <input type="datetime-local" onChange={this.update("start_date")}/>
            </label>
            <br/>
            <label>
              ENDS
              <br/>
              <input type="datetime-local" onChange={this.update("end_date")}/>
            </label>
          </div>

        <label>
          EVENT IMAGE
          <br/>
          <input type="text" value={image_url}
              onChange={this.update("image_url")}
              placeholder="Choose an image that brings your event to life"/>
        </label>
        <br/>
        <label>
          EVENT DESCRIPTION
          <br/>
          <textarea value={description}
              onChange={this.update("description")}></textarea>
        </label>
        <br/>
        <label>
          EVENT TYPE
          <br/>
          <select defaultValue={event_type} onChange={this.update("event_type")}>
            <option value="1" disabled>Select the type of event</option>
            {this.renderEventTypeOptions()}
          </select>
        </label>
        <br/>
        <label>
          EVENT TOPIC
          <br/>
          <select defaultValue={category} onChange={this.update("category")}>
            <option value="1" disabled>Select a topic</option>
            {this.renderCategoryOptions()}
          </select>
        </label>
      </div>
    );
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
    return (
      <form className="event-form">
        <p>Event Details</p>
        {this.renderDetailForm()}
        <p>Create Tickets</p>
        <br/>
        <input type="submit" value="MAKE YOUR EVENT LIVE"
            onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default EventForm;
