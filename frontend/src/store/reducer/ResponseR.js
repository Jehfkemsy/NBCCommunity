const responseInitState = {
    telemundoShows: [],
    syfyShows: [],
    usaShows: []
  };
  
  function ContentR(state = responseInitState, action) {
    switch (action.type) {
      case "GET_RESPONSE": 
        return { ...state, 
          telemundoShows: state.telemundoShows.concat(action.telemundoShows),
          syfyShows: state.syfyShows.concat(action.syfyShows),
          usaShows: state.usaShows.concat(action.usaShows)          
        };
      default:
        return state;
    }
  }
  
  export default ContentR;
  