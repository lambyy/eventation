import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="user-profile">
        <h1>{currentUser.first_name + " " + currentUser.last_name}</h1>

        <div className='tabs'>
          <Link to="/profile/tickets">Upcoming Events</Link>
          <Link to="/profile/bookmarks">Saved Events</Link>
          <Link to="/profile/organized">Organzied Events</Link>
        </div>
        <div className='tab-content'>

        </div>
      </div>
    );
  }

}

export default Profile;
