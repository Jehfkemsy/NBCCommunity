/*
Full cards to display the shows 
    * on mouse peak, shows title, and description 
    * on click onpen show page 
*/
import React, { Component, router } from 'react';
import { Card, CardImg } from 'reactstrap';
import PropTypes from 'prop-types';
// import { Animated } from 'react-animated-css';

const MediaCard = ({ image, title, description }) => {
  return (
    <Card style={cardStyle}>
      <div className="card-details d-inline-block">
        <div className="cards-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <CardImg width="100%" height="100%" src={image} />
      </div>
    </Card>
  );
};

MediaCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

const cardStyle = {
  height: 200,
  width: 150,
  boxShadow: '1px 3px 1px',
  borderRadius: 10
};

export default MediaCard;
