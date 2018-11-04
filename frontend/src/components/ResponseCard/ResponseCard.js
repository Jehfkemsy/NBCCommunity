
import React, { Component } from 'react'
import { Card, CardImg } from 'reactstrap';
import { Animated } from "react-animated-css";
export default class MediaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: this.props.comment,
            userName: this.props.username,
            profilePic: this.props.profilePic,
        }
    };

    render() {
        return (
            <Animated animationInDelay={2} animationIn="slideInRight" animationOut="slideInRight">
                <Card style={cardStyle}>
                    <CardImg width='10%' height='10%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLvh09sXH0OqJj00RJwbikO8tAZFMKIBZYG_fgqtGovnT6C_y" />
                    <h3>{this.state.Name}</h3>
                    <p>{this.state.Description}</p>
                    <CardImg width='10%' height='10%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLvh09sXH0OqJj00RJwbikO8tAZFMKIBZYG_fgqtGovnT6C_y" />
                    <CardImg width='10%' height='10%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLvh09sXH0OqJj00RJwbikO8tAZFMKIBZYG_fgqtGovnT6C_y" />
                </Card>
            </Animated>
        )
    }
}
const cardStyle = {
    height: "auto",
    width: 350,
    
}