import React, { Component } from "react";
import { connect } from "react-redux";
import ShowCard from './../../components/ShowCard/ShowCard';
import ContentA from './../../store/action/ContentA';
import Hero from './Hero';
import {Container} from 'reactstrap';
import './style.css';
import Caro from './Carousel';

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
      <Container>
        <Hero/>
        <Caro/>
  
      </Container>
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
