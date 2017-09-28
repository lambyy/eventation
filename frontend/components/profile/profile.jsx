import React from 'react';
import { Link } from 'react-router-dom';
import OrganizedEvents from './organized_events';
import UpcomingEvents from './upcoming_events';
import SavedEvents from './saved_events';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.renderContent = this.renderContent.bind(this);
  }

  componentWillMount() {
    this.props.requestAllEvents(this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.requestAllEvents(nextProps.type);
    }
  }

  renderContent() {
    const { type, events } = this.props;
    if (type === "organized") {
      return <OrganizedEvents events={events}/>;
    } else if (type === "tickets") {
      return <UpcomingEvents events={events}/>;
    } else if (type === "bookmarks") {
      return <SavedEvents />;
    } else {
      return null;
    }
  }


  render() {
    const { currentUser, type } = this.props;

    return (
      <div className="user-profile">
        <h1>{currentUser.first_name + " " + currentUser.last_name}</h1>

        <div className='tabs'>
          <Link to="/profile/tickets"
            className={ (type === "tickets") ? "active" : " "}
            >UPCOMING EVENTS</Link>
          <Link to="/profile/bookmarks"
            className={ (type === "bookmarks") ? "active" : " "}
            >SAVED EVENTS</Link>
          <Link to="/profile/organized"
            className={ (type === "organized") ? "active" : " "}
            >ORGANIZED EVENTS</Link>
        </div>
        <div className='tab-content'>
          {this.renderContent()}
        </div>
      </div>
    );
  }

}

export default Profile;
