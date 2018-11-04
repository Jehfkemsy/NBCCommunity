

const ContentA = dispatch => {
    return {
      getContents: (data) => {
        dispatch({type:"GET_CONTENT",data: data})
      }
    };
};

export default ContentA;
