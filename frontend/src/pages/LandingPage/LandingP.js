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

import React, { Component } from 'react';
import AuthA from './../../store/action/AuthA';
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import { connect } from 'react-redux';
import './style.css';

class LandingPC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

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
    // this.props.authFn.login(data);
    console.log(data);
  };

  signup = () => {
    let data = {
      email: this.state.user,
      username: this.state.user,
      password: this.state.password
    };
    // this.props.authFn.signup(data);
    console.log(data);
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container className="background">
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Form>
              <div className="form-group text-left">
                <Label htmlFor="login_email">Email address</Label>
                <Input
                  type="email"
                  className="form-control"
                  id="login_email"
                  placeholder="Enter email"
                  onChange={this.onUserChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="login_password"
                  placeholder="Password"
                  onChange={this.onPWChange}
                />
              </div>
              <div className="form-check text-left pl-3">
                <input type="checkbox" className="form-check-input" id="email_remember" />
                <label className="form-check-label" htmlFor="email_remember">
                  Check me out
                </label>
              </div>
              <Button onClick={this.login} block color="primary" className="mt-4">
                Login
              </Button>
            </Form>
            <hr />
            <Button block color="info" onClick={this.toggle} className="mt-5">
              Sign Up
            </Button>
            <Modal
              size="lg"
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Sign Up </ModalHeader>
              <ModalBody>
                <form>
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
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
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.signup}>
                  Submit
                </Button>{' '}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
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
