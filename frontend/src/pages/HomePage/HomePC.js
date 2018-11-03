import React, { Component } from "react";
import { connect } from "react-redux";
import ShowCard from './../../components/ShowCard/ShowCard'
import ContentA from './../../store/action/ContentA'

/**
 * Description:
 * This is the Home route. Land here after login.
 *
 * Input: None
 *
 * Output:
 *  - Writes to local storage:
 *  -- user
 *  -- userId
 *  -- token
 */
class HomePC extends Component {
  componentDidMount() {
    this.props.contentFn.getContents();
  }

  render() {
    return (
      <div>
        <ShowCard 
          image="http://media.mlive.com/chronicle/entertainment_impact/photo/11781702-large.jpg"
          title="The voice"
          description={this.props.contents}
        />
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
)(HomePC);
