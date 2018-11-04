import React from 'react';
import { Media} from 'reactstrap';
import PropTypes from 'prop-types';
import updateRating from '../../utils/updateResponseRating'
import {Col, Row} from 'reactstrap';


const ResponseCard = ({ id,rating,userIcon, comments, userName}) => {
    const upIcon = "https://image.flaticon.com/icons/svg/25/25330.svg"
    const downIcon = "https://image.flaticon.com/icons/svg/25/25243.svg"
  return (
    <div>
      <Row style={Styles.container}>
        <Media style={Styles.cardStyle}>
          <Media left href="#">
            <Media object src={userIcon} alt={userName} className="rounded" />
          </Media>
      <Col>
         <Media body style={Styles.body}>
           {comments}
        </Media>
      </Col>
      <Col>
        <Media onClick = {() => updateRating(id,'like')} style={Styles.upIcon} object src={upIcon} alt={upIcon} />
        <Media onClick = {() => updateRating(id,'dislike')} style={Styles.downIcon} object src={downIcon} alt={downIcon} />
      </Col>
      </Media>
    </Row>
    <div >      

    </div>
  
    </div>
  );
};
export default ResponseCard;
const Styles = {
    cardStyle :{
        height: 150,
        width: '90%',
        paddingBottom: 20,
        paddingTop: 20
    },
    userNameStyle:{ fontSize: 14 },
    upIcon:{
        height: 60,
        width: 60,
        paddingLeft: 15
    },
    downIcon:{
        height: 60,
        width: 60,
        paddingLeft: 15
      
    },
    body :{
        textAlign: 'left',
        paddingLeft: 10,
        paddingTop: 5,
        textWrap: 'wrap',
        fontSize: 12

    },
    container :{
        'background-color': 'grey',
        paddingBottom: 15,
        paddingLeft: 15,
        'border-color':'black'
    }

}

ResponseCard.propTypes = {
  userIcon: PropTypes.string,
  comments: PropTypes.string,
  userName: PropTypes.string,
  upIcon: PropTypes.bool,
  downIcon: PropTypes.bool
};



