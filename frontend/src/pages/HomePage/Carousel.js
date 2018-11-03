import React, { Component } from "react";
import { connect } from "react-redux";
import {Row, Col} from 'reactstrap';
import ContentA from './../../store/action/ContentA';
import './style.css';
import {Carousel} from 'react-responsive-carousel';
import ShowCard from './../../components/ShowCard/ShowCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Caro extends Component{
    render(){
        return(
           <div>
               <ShowCard/>
           </div>
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
  )(Caro);
  