const authInitState = {
    data: "init state"
  };
  
  function ContentR(state = authInitState, action) {
    switch (action.type) {
      case "GET_CONTENT":
        return { ...state, data: action.data };
      default:
        return state;
    }
  }
  
  export default ContentR;
  