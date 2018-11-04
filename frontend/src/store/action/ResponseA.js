import axios from 'axios';

const ResponseA = (dispatch) => {
    return {
        getResponses: () => {
            axios.get(process.env.REACT_APP_RESPONSE_URL)
            .then(res => {     
                console.log(res)          
                dispatch({type:"GET_RESPONSE", data: res})
            })
            .catch(err => {
                console.log(err)
                dispatch({type:"GET_RESPONSE_ERR"})
            });   
        }
    }
}

export default ResponseA;
 
