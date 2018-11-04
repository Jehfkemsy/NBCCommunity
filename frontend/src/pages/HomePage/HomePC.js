import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCard from './../../components/ShowCard/ShowCard';
import ContentA from './../../store/action/ContentA';
import ResponseA from './../../store/action/ResponseA';
import ResponseCards from './../../components/ResponseCard/ResponseCard';

import Hero from './Hero';
import { Container } from 'reactstrap';
import './style.css';
import Caro from './Carousel';
import GQL from '../../components/graphql/Graph';
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
  componentWillMount() {
    // this.props.contentFn.getContents('telemundo');
    this.props.responseFn.getResponses();
  }

  render() {
    return (
      <Container >
        <GQL />
        <Hero />
        <Caro />
        
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    telemundo: state.ContentR.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    contentFn: ContentA(dispatch),
    responseFn: ResponseA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePC);
