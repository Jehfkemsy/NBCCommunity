const axios = require('axios');

let getChannelShows = (channel) => {
    axios.get('https://stage-api.nbcuni.com/networks/'+ channel +'/j/shows/',{
    headers: {
        api_key: 'B6JORCtfWI35R457al8N78n64aFSL6JI265U7DrZ'
    }
})
.then( Response => {
    let {data} = Response

    data = data.data;

    let shows = [];  //shows go here
    
    data.map(async showData => {

    let imageId = showData.relationships.media.data[0].id;

    let imageObj = await axios.get('https://stage-api.nbcuni.com/networks/'+ channel+'/j/images/'+imageId +'',{
        headers: {
            api_key: 'B6JORCtfWI35R457al8N78n64aFSL6JI265U7DrZ'
        }
    })

    console.log('added image')

    let imageUrl = imageObj.data.data.attributes.path

        //individual show data

        let show = {
            id: showData.id,
            name: showData.attributes.shortTitle,
            description: showData.attributes.description,
            image: imageUrl,
        }

        console.log(show)
        shows.push(show)
    })
});
}

// getChannelShows('oxygen'); //call function on requested channel
export default getChannelShows;

//gets shows and its data from requested channel, all data is put into the shows array