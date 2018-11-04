/*
Full cards to display the shows 
    * on mouse peak, shows title, and description 
    * on click onpen show page 
*/
import React, { Component, router } from 'react'
import { Card, CardImg } from 'reactstrap';
import { Animated } from "react-animated-css";
export default class MediaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.title,
            Image: this.props.image,
            Description: this.props.description,
            id: this.props.id,
            Seasons: this.props.Seasons,
            Video: this.props.Video,
            clicked: false,

        }
    };

    render() {
        return (
            <Animated animationInDelay={2} animationIn="slideInRight" animationOut="slideInRight">
                <Card style={cardStyle}>
                    {/* <img style={{ height: 300, width: 200 }} source={this.state.Image} alt={this.state.Name} /> */}
                    <CardImg alt={this.state.Name} width="auto" height="auto" borderRadius={10} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLvh09sXH0OqJj00RJwbikO8tAZFMKIBZYG_fgqtGovnT6C_y" />
                </Card>
            </Animated>
        )
    }
}

const cardStyle = {
    height: "auto",
    width: 350,
}