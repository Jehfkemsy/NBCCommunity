import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";

  

const ResponseCard = (props) => { 
        return (
            <div>
                <Card>
                    <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                        {props.comments}
                        </Typography>
                    </CardContent>                   
                        <ThumbUp />
                        <ThumbDown />                
                    </CardActionArea>
                </Card>
            </div>
        )
    
}

export default ResponseCard;