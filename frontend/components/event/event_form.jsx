import React from 'react';

class EventForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      location: "",
      start_date: "",
      end_date: "",
      image_url: "",
      description: "",
      event_type: ""
    };

    this.update = this.update.bind(this);
  }

  update(type) {
    return (e) => {
      e.preventDefault();
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    const { title, location, image_url, description } = this.state;
console.log(this.state);
    return (
      <form className="event-form">
        <p>Event Details</p>

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
        <select onChange={this.update("event_type")}>
          <option value="Music">Music</option>
          <option value="Arts">Arts</option>
          <option value="Food&Drink">Food & Drink</option>
          <option value="Other">Other</option>
        </select>
      </label>
      </form>
    );
  }
}

export default EventForm;
