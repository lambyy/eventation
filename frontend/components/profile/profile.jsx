import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  componentWillMount() {
    // console.log(this.props.type);
    this.props.requestAllEvents(this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.type);
    if (!nextProps.events) {
      console.log("no events");
      this.props.requestAllEvents(this.props.type);
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

        </div>
      </div>
    );
  }

}

export default Profile;
