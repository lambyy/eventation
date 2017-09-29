import React from 'react';
import { merge } from 'lodash';
import DetailForm from './event_form/detail_form';
import TicketForm from './tickets/ticket_form';

class EventForm extends React.Component {
  constructor(props){
    super(props);

    if (this.props.event) {
      this.state = this.props.event;
      this.state.tickets = this.props.tickets;
      this.state.num_tickets = this.props.tickets.length;
    } else {
      this.state = this.defaultState();
    }

    this.update = this.update.bind(this);
    this.updateTicket = this.updateTicket.bind(this);
    this.addTicket = this.addTicket.bind(this);
    this.deleteTicket = this.deleteTicket.bind(this);
    this.renderTickets = this.renderTickets.bind(this);

    this.updateImageURL = this.updateImageURL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.defaultState = this.defaultState.bind(this);

    this.renderEventErrors = this.renderEventErrors.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.clearErrors();
    this.props.requestEvent(this.props.eventId);
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.clearErrors();
      if (!nextProps.event && nextProps.eventId) {
        this.props.requestEvent(nextProps.eventId);
      }
      if (nextProps.location.pathname === "/events/create") {
        this.setState(this.defaultState());
      }
    }

    if (nextProps.event) {
      this.setState(nextProps.event);
      this.setState({
        tickets: nextProps.tickets,
        num_tickets: nextProps.tickets.length
      });
    }

    if (nextProps.errors == "Event does not exist") {
      if (nextProps.location.pathname === "/events/create") {
        this.props.clearErrors();
      }
      this.setState(this.defaultState());
    }
  }

  defaultState() {
    return {
      title: "",
      location: "",
      start_date: "",
      end_date: "",
      image_url: "",
      description: "",
      event_type: "1",
      category: "1",
      tickets: [{name: "", quantity: "", price: ""}],
      num_tickets: 1
    };
  }

  update(type) {
    return (e) => {
      e.preventDefault();
      this.setState({ [type]: e.target.value });
    };
  }

  updateTicket(type, idx) {
    return (e) => {
      e.preventDefault();
      let tickets = this.state.tickets.slice();
      if (type === "name") {
        tickets[idx] = merge({}, tickets[idx], { name: e.target.value });
      } else if (type === "quantity") {
        tickets[idx] = merge({}, tickets[idx], { quantity: e.target.value });
      } else if (type === "price") {
        tickets[idx] = merge({}, tickets[idx], { price: e.target.value });
      }
      this.setState({ tickets });
    };
  }

  addTicket() {
    let tickets = this.state.tickets.slice();
    tickets[this.state.num_tickets] =
      merge({}, {name: "", quantity: "", price: ""});

    this.setState({
      tickets,
      num_tickets: this.state.num_tickets + 1
    });
  }

  deleteTicket(idx) {
    let tickets = this.state.tickets.slice();
    tickets.splice(idx, 1);
    console.log(tickets);

    this.setState({
      tickets,
      num_tickets: this.state.num_tickets - 1
    });
  }

  renderTickets() {
    let tickets = [];
    for (let i = 0; i < this.state.num_tickets; i++) {
      // let ticket = (this.state.tickets[i])
      //   ? this.state.tickets[i] : { name: "", quantity: "", price: "" };

      tickets[i] = <TicketForm
                      key={i}
                      idx={i}
                      formType={this.props.formType}
                      ticket={this.state.tickets[i]}
                      updateTicket={this.updateTicket}
                      deleteTicket={this.deleteTicket}/>;
    }
    return tickets;
  }

  updateImageURL(url) {
    this.setState({ image_url: url });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(action => this.props.history.push(`/events/${action.event.id}`))
      .fail(() => setTimeout(() => window.scrollTo(0,0), 500));
  }

  renderEventErrors() {
    return this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
  }

  render() {

    return (
      <div>
        <div className="event-form-header">
          <p>Create An Event</p>
          <input type="submit" className="orange-button"
            value="Publish" onClick={this.handleSubmit} />
        </div>
        <div className="divider"></div>
        <form className="event-form">
          <p><span>1</span>Event Details</p>
          <ul className="error-display">{this.renderEventErrors()}</ul>
          <DetailForm update={this.update}
              updateImageURL={this.updateImageURL}
              state={this.state}/>
          <p><span>2</span>Create Tickets</p>
          <br/>
          {this.renderTickets()}
          <button className="blue-button" onClick={this.addTicket}>Add Another Ticket</button>
          <br/>
          <input type="submit" className="green-button"
              value="MAKE YOUR EVENT LIVE"
              onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default EventForm;
