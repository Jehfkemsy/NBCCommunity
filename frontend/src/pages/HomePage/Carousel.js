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

// let data = [this.props.te]
    console.log('Data')
    console.log(this.props.responses)
    return (
      // <div className="scrolling-wrapper">
      //     {this.props.telemundoShows.map(item => {
      //       return <ShowCard image={item.image} title={item.title} description={item.description} />;
      //     })}
    
      // </div>
      <div>
      {this.props.contents.map(channel => {
        return(
          <div className="scrolling-wrapper">
          <h1>{channel[0].description}</h1>
            {channel.map(show => {
              return(
                <ShowCard  image = {show.image} title={show.title} description={show.description}></ShowCard>
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
