const axios = require('axios');

let updateRating = async (id,rating) => {
   let data = await axios.get('http://localhost:3001/api/responses/'+ id +'?access_token=1209600')

   data = data.data

   let{percentageRating,likes,userId,comment,image,video,views,type,show,decorations,dislikes} = data;
   
   if(rating === 'like')
    likes++

    else
        dislikes ++
    
    percentageRating = likes/dislikes;

    axios.put('http://localhost:3001/api/responses/'+ id +'?access_token=1209600',{
        percentageRating,
        userId,
        comment,
        image,
        video,
        views,
        type,
        show,
        decorations,
        dislikes,
        likes,
    })
}

export default updateRating;

//function take id of response and rating value and updates the rating accordingly