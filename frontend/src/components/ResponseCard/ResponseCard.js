import React, { Component } from 'react';
import { Media } from 'reactstrap';
import PropTypes from 'prop-types';

const ResponseCard = ({ userIcon, comments, userName, upIcon, downIcon }) => {
    console.log('this is response')
    console.log(comments)
  return (
    <div>
    <Media style={Styles.cardStyle}>
      <Media left href="#">
        <Media object src={userIcon} alt={userName} className="rounded" />
      </Media>
      <Media body style={Styles.body}>
        {comments}
      </Media>
      <Media style={Styles.upIcon} object src={upIcon} alt={upIcon} />
      <Media style={Styles.downIcon} object src={downIcon} alt={downIcon} />
    </Media>
    </div>
  );
};
export default ResponseCard;
const Styles = {
    cardStyle :{
        height: 20,
        width: 'auto',
    },
    userNameStyle:{ fontSize: 14 },
    upIcon:{
        height: '50%',
        width: '50%'
    },
    downIcon:{
        height: '50%',
        width: '50%'
    },
    body :{
        textAlign: 'left',
        paddingLeft: 10,
        paddingTop: 5,
        textWrap: 'wrap',
        fontSize: 12,
        "background-color": "red" 

    }

}

ResponseCard.propTypes = {
  userIcon: PropTypes.string,
  comments: PropTypes.string,
  userName: PropTypes.string,
  upIcon: PropTypes.bool,
  downIcon: PropTypes.bool
};

  };

