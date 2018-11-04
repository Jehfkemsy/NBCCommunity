import axios from 'axios';

const ResponseA = (dispatch) => {
    return {
        getResponses: () => {
            axios.get(process.env.REACT_APP_RESPONSE_URL)
            .then(res => {     
                // console.log(res.data)          
                dispatch({type:"GET_RESPONSE", data: res.data})
            })
            .catch(err => {
                // console.log(err)
                dispatch({type:"GET_RESPONSE_ERR"})
            });   
        },
        postResponse: (userId,comment,image,type,video,show) => {
            axios.post('http://localhost:3001/api/responses/',{
                percentageRating: 0,
                userId,
                comment,
                image,
                video,
                type,
                show,
                dislikes:1,
                likes:1,
                views: 0
            })
        }
        
    }
}

export default ResponseA;
 
