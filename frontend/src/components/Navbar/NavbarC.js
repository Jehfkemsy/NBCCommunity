import React, { Component } from 'react';
import AuthA from './../../store/action/AuthA';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/NBCcommunity.png';
import { Redirect } from 'react-router-dom';

class NavbarC extends Component {
  logout = () => {
    this.props.authFn.logout();
    console.log('clicek');
  };

  render() {
    const auth = this.props.auth;

    const authLinks = (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a href="/" className="navbar-brand">
          <img className="nav-logo" src={Logo} />
        </a>

        <button onClick={this.logout} className="btn btn-outline-danger my-2 my-sm-0" type="submit">
          Logout
        </button>
      </nav>
    );
    if (this.props.auth == false) {
      return <Redirect to="/" />;
    } else {
      return <div>{auth ? authLinks : ''}</div>;
    }
  }
}

NavbarC.propTypes = {
  auth: PropTypes.bool.isRequired
};

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
)(NavbarC);
