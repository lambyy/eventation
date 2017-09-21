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
    this.renderErrors = this.renderErrors.bind(this);
    this.navLink = this.navLink.bind(this);
    this.renderNameForm = this.renderNameForm.bind(this);
    this.renderDemoButton = this.renderDemoButton.bind(this);
    this.signInDemo = this.signInDemo.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  componentWillUnmount() {
    clearTimeout(this.clearInterval);
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

  renderErrors() {
    return this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
  }

  navLink() {
    let action = 'Enter your email & password to log in';
    let link = <Link to="/signup">sign up</Link>;
    let buttonText = "Log In";

    if (this.props.formType === "signup") {
      action = 'Enter your information to sign up';
      link =  <Link to="/login">login</Link>;
      buttonText = "Sign Up";
    }

    return { action, link, buttonText };
  }

  renderNameForm() {
    const { first_name, last_name } = this.state;

    return (
      <div className="name">
        <label>
          First Name
          <br/>
          <input type="text" value={first_name}
                onChange={this.update("first_name")}
                placeholder="First name"/>
        </label>

        <label>
          Last name
          <br/>
          <input type="text" value={last_name}
                onChange={this.update("last_name")}
                placeholder="Last name"/>
        </label>
      </div>
    );
  }

  renderDemoButton() {
    return (
      <button className="demo-disable" onClick={this.signInDemo}>Demo</button>
    );
  }

  signInDemo(e) {
    e.preventDefault();

    let inputsToDisable = document.getElementsByClassName("demo-disable");
    for ( let i = 0; i < inputsToDisable.length; i++ ) {
      inputsToDisable[i].disabled = true;
    }

    let demoEmail = Array.from("guest@example.com");
    let demoPassword = Array.from("123456");
    this.setState({ email: "", password: "" });

    this.clearInterval = setInterval(() => {
      if (demoEmail.length) {
        this.setState({ email: (this.state.email + demoEmail.shift())});
      } else if (demoPassword.length) {
        this.setState({ password: (this.state.password + demoPassword.shift())});
      } else {
        this.props.signInDemo(this.state);
        clearTimeout(this.clearInterval);
      }

    },100);
  }

  render() {
    const { email, password } = this.state;
    const login = this.props.formType === "login";

    return (
        <form className="session-form">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <p>Let's get started</p>
          <p>{this.navLink().action} or {this.navLink().link}</p>
          <ul>{this.renderErrors()}</ul>
          <label>
            Email address
            <br/>
            <input className="demo-disable"
                  type="text" value={email}
                  onChange={this.update("email")}
                  placeholder="Email"/>
          </label>
          { (!login) ? this.renderNameForm() : null }
          <label>
            Password
            <br/>
            <input className="demo-disable"
                  type="password" value={password}
                  onChange={this.update("password")}
                  placeholder="Password"/>
          </label>

          <input className="demo-disable"
                type="submit" value={this.navLink().buttonText}
                onClick={this.handleSubmit}/>
          <div>{ (login) ? this.renderDemoButton() : null }</div>
        </form>
    );
  }
}

export default SessionForm;
