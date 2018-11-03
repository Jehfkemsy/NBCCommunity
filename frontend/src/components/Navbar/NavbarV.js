import React from "react";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import PropTypes from "prop-types";

function NavbarV(props) {
  if (props.auth) {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a href="/" className="navbar-brand">CriticizeKing</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default NavbarV;
