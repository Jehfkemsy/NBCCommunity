import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import ContentA from './../../store/action/ContentA';
import ResponseA from './../../store/action/ResponseA';
import './style.css';
import { Carousel } from 'react-responsive-carousel';
import ShowCard from './../../components/ShowCard/ShowCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Caro extends Component {
  render() {
    console.log(this.props.responses)
    // let data = [this.props.te]
    console.log('Data');
    return (
      <div>
      {this.props.contents.map(channel => {
        return(
          <div className="scrolling-wrapper">
          <h1>{channel[0].description}</h1>
            {channel.map(show => {
              let responses = [];

              this.props.responses.map(response => {
                if(response.show == show.title)
                  responses.push(response)
              })
              console.log('responses:')
              console.log(responses)

              return(
                <ShowCard responses = {responses} image = {show.image} title={show.title} description={show.description}></ShowCard>
              )
            })}
          </div>
        )
      })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contents: state.ContentR.contents,
    responses: state.ResponseR.responses
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
)(Caro);
