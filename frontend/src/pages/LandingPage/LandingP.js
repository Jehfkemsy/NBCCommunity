import React, { Component } from 'react';
import AuthA from './../../store/action/AuthA';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { connect } from 'react-redux';

/**
 * Description:
 * This is the default route. Prompts user to login or signup.
 * Showcases the app.
 *
 * Input: None
 *
 * Output:
 *  - Writes to local storage:
 *  -- user
 *  -- userId
 *  -- token
 *
 * Components used:
 *  - None
 *
 * Local State:
 *  - user: Holds input filed value
 *  - password: Holds input field value
 *
 * Central store:
 *  - auth: Set to true if login successful
 *
 * Todo:
 *  - Improve styling
 *  - Showcase the app
 *  - Display error message on failed login / signup
 */
class LandingPC extends Component {
  state = {
    user: '',
    password: ''
  };

  onUserChange = event => {
    this.setState({ user: event.target.value });
  };

  onPWChange = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    let data = {
      email: this.state.user,
      password: this.state.password
    };
    this.props.authFn.login(data);
  };

  signup = () => {
    let data = {
      email: this.state.user,
      username: this.state.user,
      password: this.state.password
    };
    this.props.authFn.signup(data);
  };

  render() {
    return (
      <Container>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.AuthR.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authFn: AuthA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPC);
