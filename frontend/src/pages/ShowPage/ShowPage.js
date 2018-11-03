import React, { Component } from "react";
import { connect } from "react-redux";
import ShowCard from './../../components/ShowCard/ShowCard'
import ContentA from './../../store/action/ContentA'

/**
 * Description:
 * This is the Show route. Land here after clicking a ShowCard on the HomePage.
 *
 * Input: None
 * Display: 
 *  - AddResponse Modal
 *  - ResponseCards -> ResponseModal
 * Get from Store:
 *  - Response's {}
 *  -- userId
 *  -- token
 */
class ShowPage extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>ShowPage</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contents : state.ContentR.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    contentFn : ContentA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
