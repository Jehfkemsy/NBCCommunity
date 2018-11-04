import React, { Component } from "react";
import { connect } from "react-redux";
import ResponseA from './../../store/action/ResponseA';
import ResponseCards from './../../components/ResponseCard/ResponseCard';

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

  componentWillMount(){
    this.props.responseFn.getResponses();
  }

  render() {
    return (
      <div>
        <ResponseCards />
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
    responseFn: ResponseA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
