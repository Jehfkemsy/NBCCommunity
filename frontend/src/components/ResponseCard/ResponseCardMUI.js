import React from 'react'
import Card from "@material-ui/core/Card";
import { connect } from 'react-redux';
import ResponseA from './../../store/action/ResponseA'
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import IconButton from '@material-ui/core/IconButton';


class ResponseCard extends React.Component { 
    render() {   
        return (
            <div>
                <Card>
                    <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.comments}
                        </Typography>
                    </CardContent>    
                    <IconButton onClick={this.increaseRating} color="primary" aria-label="Add to shopping cart">
                        <ThumbUp />
                    </IconButton>      
                    <IconButton onClick={this.decreaseRating} color="primary" aria-label="Add to shopping cart">
                        <ThumbDown />
                    </IconButton>               
                                     
                    </CardActionArea>
                </Card>
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
      responseFn: ResponseA(dispatch)
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(ResponseCard);
