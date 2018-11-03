const axios = require('axios');

let updateRating = async (id,rating) => {
   let data = await axios.get('http://localhost:3001/api/responses/'+ id +'?access_token=1209600')

   data = data.data

   let{totalRatings,avgRating,numRatings,userId,comment,image,video,views,type,show,decorations} = data;
    console.log('old rating: ' + avgRating);
    numRatings ++;

    totalRatings += rating;

    avgRating = totalRatings/numRatings

    console.log('new rating: ' + avgRating)
    
    axios.put('http://localhost:3001/api/responses/'+ id +'?access_token=1209600',{
        numRatings: numRatings,
        avgRating: avgRating,
        userId: userId,
        comment: comment,
        image: image,
        video: video,
        views: views,
        type: type,
        show: show,
        decorations: decorations,
        totalRatings: totalRatings
    })
}

export default updateRating;

//function take id of response and rating value and updates the rating accordingly