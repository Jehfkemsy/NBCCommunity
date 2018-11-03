import axios from 'axios';

let API_URL = "https://stage-api.nbcuni.com/networks/telemundocms/j/posts";
// let api_test = "https://stage-api.nbcuni.com/networks/usa/j/posts/6a81a0ba-66ee-4e5a-8a8c-7c79a7b6483t"
let api_mock = "https://private-38408f-concertojsonapi.apiary-mock.com/networks/usa/j/collections/id"
let config = {
    "api_key" : "B6JORCtfWI35R457al8N78n64aFSL6JI265U7DrZ"
};

const ContentA = (dispatch) => {
    return {
        getContents: () => {
            axios.get(API_URL,{headers: config})
            // axios.get(api_mock)
            .then(res => {
                console.log(res)
                dispatch({type:"GET_CONTENT", data: res.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type:"GET_CONTENT_ERR"})
            });   
        }
    }
}

export default ContentA;
 
