import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import ContentA from './../../store/action/ContentA';
import './style.css';
import { Carousel } from 'react-responsive-carousel';
import ShowCard from './../../components/ShowCard/ShowCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


class Caro extends Component {
  render() {
    return (
      <div className="scrolling-wrapper">
        {this.props.telemundoShows.map(item => {
          return <ShowCard image={item.image} title={item.title} description={item.description} />;
        })}
        {this.props.syfyShows.map(item => {
          return <ShowCard image={item.image} title={item.title} description={item.description} />;
        })}
        {this.props.usaShows.map(item => {
          return <ShowCard image={item.image} title={item.title} description={item.description} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    telemundoShows: state.ContentR.telemundoShows,
    syfyShows: state.ContentR.syfyShows,
    usaShows: state.ContentR.usaShows
  };
};

const mapDispatchToProps = dispatch => {
  return {
    contentFn: ContentA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Caro);
