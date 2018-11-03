const showInitState = {
    telemundoShows: [],
    syfyShows: [],
    usaShows: []
  };
  
  function ContentR(state = showInitState, action) {
    switch (action.type) {
      case "GET_SYFY": 
        return { ...state, 
          syfyShows: state.syfyShows.concat(action.syfyShows)                  
        };
      case "GET_TELEMUNDO":
        return { ...state,
          telemundoShows: state.telemundoShows.concat(action.telemundoShows)
        };
      case "GET_USA":
        return { ...state,
          usaShows: state.usaShows.concat(action.usaShows) 
        };
      default:
        return state;
    }
  }
  
  export default ContentR;
  