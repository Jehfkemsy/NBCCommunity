
import React, { Component } from 'react'
import { Media } from 'reactstrap';
const ResponseCard = (props) => {
    return (
        <Media style={Styles.cardStyle}>
            <Media left href="#">
                <Media object data-src={props.userIcon} alt={props.userName} />
            </Media>
            <Media body style={Styles.body}>
                {props.comments}
            </Media>
            <Media style={Styles.upIcon} object data-src={props.userIcon} alt={props.upIcon} />
            <Media style={Styles.downIcon} object data-src={props.userIcon} alt={props.downIcon} />

        </Media>
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

    }


}
