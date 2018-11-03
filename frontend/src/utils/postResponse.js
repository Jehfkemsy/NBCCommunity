const axios = require('axios');

let postResponse = (userId,comment,image,type,video,show) => {
    axios.post('http://localhost:3001/api/responses/',{
        avgRating: 0,
        userId: userId,
        comment: comment,
        image: image,
        video: video,
        type: type,
        show: show,
        totalRatings: 0,
        numRatings: 0,
        views: 0
    })
}

//this function takes in the parameters to post a new response 

export default postResponse;