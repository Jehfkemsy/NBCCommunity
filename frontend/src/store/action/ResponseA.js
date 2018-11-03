import axios from 'axios';

const ResponseA = (dispatch) => {
    return {
        getResponse: () => {
            axios.get(process.env.REACT_APP_RESPONSE_GET_URL)
            // axios.get(api_mock)
            .then(res => {
                
                dispatch({type:"GET_RESPONSE", telemundo: []})
            })
            .catch(err => {
                console.log(err)
                dispatch({type:"GET_RESPONSE_ERR"})
            });   
        }
    }
}

export default ResponseA;
 
