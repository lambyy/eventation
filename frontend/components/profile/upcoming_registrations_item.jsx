import React from 'react';

class UpcomingRegistrationsItem extends React.Component {
  constructor(props) {
    super(props);

    this.renderRegistrations = this.renderRegistrations.bind(this);
  }

  renderRegistrations() {
    const summary = this.props.registrations.map( registration => (
      <div key={registration.id} className="summary">
        <p>{registration.name}</p>
        <p>{registration.num_tickets}</p>
        <button className="solid-blue-button"
          >Return</button>
      </div>
    ));
    return summary;
  }

  render() {
    const { handleCloseModal, eventTitle } = this.props;

    return (
      <div className="registration-item">
        <button className="fa fa-times-circle-o" onClick={handleCloseModal}></button>
          <h3>{`Your registrations to ${eventTitle}!`}</h3>
          <div className="order-summary">
            <h4>Order Summary</h4>
            <h6>TYPE</h6>
            <h6>QUANTITY</h6>
            {this.renderRegistrations()}
          </div>
      </div>
    );
  }
}

export default UpcomingRegistrationsItem;
