/*
Full cards to display the shows 
    * on mouse peak, shows title, and description 
    * on click onpen show page 
*/
import React, { Component, router } from 'react'
import { Card, CardImg } from 'reactstrap';

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
            <Card style={cardStyle}>
                {/* <img style={{ height: 300, width: 200 }} source={this.state.Image} alt={this.state.Name} /> */}
                <CardImg width="100%" height="100%" src="https://s.newsweek.com/sites/www.newsweek.com/files/styles/embed-lg/public/2018/04/18/voice-2018-results-top-12-live-playoffs-who-saved-eliminated-songs-voting-app-itunes_1.jpg"/>
            </Card>
        )
    }
}

const cardStyle = {
    height: 200,
    width: 150,
    boxShadow: "1px 3px 1px", borderRadius: 10,
}