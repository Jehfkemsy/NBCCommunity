const responseInitState = {
    response: []
  };
  
  function ContentR(state = responseInitState, action) {
    switch (action.type) {
      case "GET_RESPONSE": 
        return { ...state, 
          response: action.data
        };
      default:
        return state;
    }
  }
  
  export default ContentR;
  