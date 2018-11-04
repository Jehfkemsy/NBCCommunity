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
import updateRating from '../../utils/updateResponseRating'


class ResponseCard extends React.Component { 
    render() {   
        console.log(this.props.id)
        return (
            <div>
                <Card>
                    <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.comments}
                        </Typography>
                    </CardContent>    
                    <IconButton onClick={() => updateRating(this.props.id,'like')} color="primary" aria-label="Add to shopping cart">
                        <ThumbUp />
                        <p>{this.props.likes}</p>
                    </IconButton>      
                    <IconButton onClick={() => updateRating(this.props.id,'dislike')} color="primary" aria-label="Add to shopping cart">
                        <ThumbDown />
                        <p>{this.props.dislikes}</p>
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
