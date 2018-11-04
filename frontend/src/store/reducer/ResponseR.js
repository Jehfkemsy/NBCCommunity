const responseInitState = {
    responses: []
  };
  
  function ResponseR(state = responseInitState, action) {
    switch (action.type) {
      case "GET_RESPONSE": 
        return { ...state, 
          responses: action.data      
        };
      default:
        return state;
    }
  }
  
  export default ResponseR;
  