import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentA from './../../store/action/ContentA';
import ResponseA from './../../store/action/ResponseA';
import Grid from '@material-ui/core/Grid';
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


      <Grid>
        <Hero />
        <GQL />
        <Caro />
      </Grid>
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
