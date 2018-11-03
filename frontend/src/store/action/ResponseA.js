import axios from 'axios';

const ResponseA = (dispatch) => {
    return {
        getResponse: () => {
            axios.get()
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

export default ResponseA;
 
