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
    if (!nextProps.events) {
      console.log("no events");
      this.props.requestAllEvents(this.props.type);
    }

  }

  renderContent() {
    const { type } = this.props;
    if (type === "organized") {
      return <OrganizedEvents />;
    } else if (type === "tickets") {
      return <UpcomingEvents />;
    } else if (type === "bookmarks") {
      return <SavedEvents />;
    } else {
      return null;
    }
  }


  render() {
    const { currentUser } = this.props;

    return (
      <div className="user-profile">
        <h1>{currentUser.first_name + " " + currentUser.last_name}</h1>

        <div className='tabs'>
          <Link to="/profile/tickets">Upcoming Events</Link>
          <Link to="/profile/bookmarks">Saved Events</Link>
          <Link to="/profile/organized">Organized Events</Link>
        </div>
        <div className='tab-content'>
          {this.renderContent()}
        </div>
      </div>
    );
  }

}

export default Profile;
