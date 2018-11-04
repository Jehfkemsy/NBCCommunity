const responseInitState = {
    response: []
  };
  
  function ResponseR(state = responseInitState, action) {
    switch (action.type) {
      case "GET_RESPONSE": 
        return { ...state, 
<<<<<<< Updated upstream
          response: action.data
=======
          response: action.data      
>>>>>>> Stashed changes
        };
      default:
        return state;
    }
  }
  
  export default ResponseR;
  