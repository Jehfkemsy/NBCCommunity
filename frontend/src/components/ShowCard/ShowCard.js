/*
Full cards to display the shows 
    * on mouse peak, shows title, and description 
    * on click onpen show page 
*/
import React from 'react';
import { CardImg } from 'reactstrap';
import PropTypes from 'prop-types';
import ShowModal from './Modal';
import Card from '@material-ui/core/Card';



const MediaCard = ({ image, title, description, responses }) => {
  return (
    <Card style={cardStyle}>
      <ShowModal responses={responses} buttonLabel={title} image={image} userName="test" />
      <CardImg height='100%' width='100%' src={image} />
    </Card>
  );
};

MediaCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

const cardStyle = {
  marginTop: 10,
  marginLeft: 30,
  marginBottom: 50,
  height: '100%',
  width: '27%',
  boxShadow: '1px 3px 1px',
  borderRadius: 10
};

export default MediaCard;
