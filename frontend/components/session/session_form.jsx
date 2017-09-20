import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navLink = this.navLink.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/');
    }
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

  clearErrors(e) {
    this.props.clearErrors();
  }

  navLink() {
    const { first_name, last_name } = this.state;
    let action = 'log in';
    let link = <Link to="/signup" onClick={this.clearErrors}>sign up</Link>;
    let name;

    if (this.props.formType === "signup") {
      action = 'sign up';
      link =  <Link to="/login" onClick={this.clearErrors}>login</Link>;
      name = <div className="name">
        <label>
          First Name
          <br/>
          <input type="text" value={first_name}
                onChange={this.update("first_name")}/>
        </label>

        <label>
          Last name
          <br/>
          <input type="text" value={last_name}
                onChange={this.update("last_name")}/>
        </label>
      </div>;
    }

    return { action, link, name };
  }

  renderErrors() {
    return this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
  }

  render() {
    const { email, password } = this.state;

    return (
        <form className="session-form">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <p>Let's get started</p>
          <p>Enter your email/password to {this.navLink().action} or {this.navLink().link}</p>
          <ul>{this.renderErrors()}</ul>
          <label>
            Email address
            <br/>
            <input type="text" value={email}
                  onChange={this.update("email")}/>
          </label>
          {this.navLink().name}
          <label>
            Password
            <br/>
            <input type="password" value={password}
                  onChange={this.update("password")}/>
          </label>

          <input type="submit" value={this.navLink().action.toUpperCase()}
                onClick={this.handleSubmit}/>
          <button>DEMO</button>
        </form>
    );
  }
}

export default SessionForm;
