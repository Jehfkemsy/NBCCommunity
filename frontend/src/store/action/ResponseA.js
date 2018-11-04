import axios from 'axios';

const ResponseA = (dispatch) => {
    return {
<<<<<<< Updated upstream
        getResponse: () => {
            axios.get(process.env.REACT_APP_RESPONSE_GET_URL)
            
            .then(res => {               
                dispatch({type:"GET_RESPONSE", telemundo: []})
=======
        getResponses: () => {
            axios.get(process.env.REACT_APP_RESPONSE_URL)
            .then(res => {     
                console.log(res)          
                dispatch({type:"GET_RESPONSE", data: res})
>>>>>>> Stashed changes
            })
            .catch(err => {
                console.log(err)
                dispatch({type:"GET_RESPONSE_ERR"})
            });   
        }
    }
}

export default ResponseA;
 
