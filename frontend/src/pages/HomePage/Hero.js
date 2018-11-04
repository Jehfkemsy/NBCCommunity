import React, { Component } from "react";
import { connect } from "react-redux";
import {Row, Col } from 'reactstrap'; 
import ShowCard from './../../components/ShowCard/ShowCard';
import ContentA from './../../store/action/ContentA';
import './style.css';

class Hero extends Component{

    render(){
        return(
            <Row className='Hero'>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    
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
  )(Hero);
  