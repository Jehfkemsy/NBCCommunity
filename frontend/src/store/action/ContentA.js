import axios from 'axios';

<<<<<<< HEAD
const ContentA = dispatch => {
  return {
    getContents: channel => {
      axios
        .get('https://stage-api.nbcuni.com/networks/' + channel + '/j/shows/', {
          headers: {
            api_key: 'B6JORCtfWI35R457al8N78n64aFSL6JI265U7DrZ'
          }
        })
        .then(Response => {
          let { data } = Response;

          data = data.data;

          let shows = []; //shows go here

          data.map(async showData => {
            let imageId = showData.relationships.media.data[0].id;

            let imageObj = await axios.get(
              'https://stage-api.nbcuni.com/networks/' +
                channel +
                '/j/images/' +
                imageId +
                '',
              {
=======

const ContentA = (dispatch) => {
    return {
        getContents: (channel) => {
            axios.get('https://stage-api.nbcuni.com/networks/'+ channel +'/j/shows/',{
>>>>>>> f9cb5a7265977ab8ad315163bb75257c21ea8dfe
                headers: {
                  api_key: 'B6JORCtfWI35R457al8N78n64aFSL6JI265U7DrZ'
                }
              }
            );

            console.log('added image');

            let imageUrl = imageObj.data.data.attributes.path;

            //individual show data

            let show = {
              id: showData.id,
              name: showData.attributes.shortTitle,
              description: showData.attributes.description,
              image: imageUrl
            };

            console.log(show);
            shows.push(show);
            if (channel === 'syfy') {
              dispatch({ type: 'GET_SYFY', data: shows });
            } else if (channel === 'telemundo') {
              dispatch({ type: 'GET_TELEMUNDO', data: shows });
            } else if (channel === 'usa') {
              dispatch({ type: 'GET_USA', data: shows });
            }
          });
        });
    }
  };
};

export default ContentA;
