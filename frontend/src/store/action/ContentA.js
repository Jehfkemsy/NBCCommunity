

const ContentA = dispatch => {
    return {
      getTelemundo: (data) => {
        dispatch({type:"GET_TELEMUNDO",data: data})
      },
      getSyfy: (data) => {
        dispatch({type:"GET_SYFY",data: data})
      },
      getUSA: (data) => {
        dispatch({type:"GET_USA",data: data})
      }    
    };
};

export default ContentA;
