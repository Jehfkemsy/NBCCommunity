

const ContentA = dispatch => {
    return {
      getContents: (data) => {
        console.log(data)
        dispatch({type:"GET_RESPONSE", data: data.data})
      }
    }
};

export default ContentA;
