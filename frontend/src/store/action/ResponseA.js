import axios from 'axios';

const ResponseA = (dispatch) => {
    return {
        getResponses: () => {
            axios.get(process.env.REACT_APP_RESPONSE_URL)
            .then(res => {     
                console.log(res.data)          
                dispatch({type:"GET_RESPONSE", data: res.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type:"GET_RESPONSE_ERR"})
            });   
        },
        postResponse: (data) => {
            console.log("inside postResponse") 
            console.log(data)
            axios.post(process.env.REACT_APP_RESPONSE_URL,data)
            .then(res=>{
                 
                axios.get(process.env.REACT_APP_RESPONSE_URL)
                .then(res => {     
                            
                    dispatch({type:"GET_RESPONSE", data: res.data})
                })
                .catch(err => {
                    console.log(err)
                    dispatch({type:"GET_RESPONSE_ERR"})
                });   
                console.log("post successful")
            })
            .catch(err => {
                console.log("error posting")
            })
        }
        
    }
}

export default ResponseA;
 
