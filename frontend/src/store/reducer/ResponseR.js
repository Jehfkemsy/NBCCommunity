const responseInitState = {
    response: []
  };
  
  function ResponseR(state = responseInitState, action) {
    switch (action.type) {
      case "GET_RESPONSE": 
        return { ...state, 
          response: action.data      
        };
      default:
        return state;
    }
  }
  
  export default ResponseR;
  