import React, { Component } from "react";
import { connect } from "react-redux";
import {Row, Col} from 'reactstrap';
import ContentA from './../../store/action/ContentA';
import './style.css';


class Carousel extends Component{
    render(){
        return(
            <Row className = 'Hero'>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1>
                       Carousel
                    </h1>
                </Col>
            </Row>
        )
        
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
  )(Carousel);
  