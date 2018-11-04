const axios = require('axios');

let postResponse = (userId,comment,image,type,video,show) => {
    axios.post('http://localhost:3001/api/responses/',{
        percentageRating: 0,
        userId,
        comment,
        image,
        video,
        type,
        show,
        dislikes:1,
        likes:1,
        views: 0
    })
}

//this function takes in the parameters to post a new response 

export default postResponse;