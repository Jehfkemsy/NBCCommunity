import React, { Component } from "react";
import NavbarV from "./NavbarV";
import AuthA from "./../../store/action/AuthA";

import { connect } from "react-redux";

class NavbarPC extends Component {
  logout = () => {
    this.props.authFn.logout();
  };

  render() {
    return <NavbarV logout={this.logout} auth={this.props.auth} />;
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
)(NavbarPC);
