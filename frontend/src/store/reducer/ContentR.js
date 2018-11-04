const showInitState = {
  telemundoShows: [],
  syfyShows: [],
  usaShows:[],
  contents: []
};

  function ContentR(state = showInitState, action) {
    switch (action.type) {
      case "GET_TELEMUNDO": 
        return { ...state, 
          telemundoShows: action.data                            
        };
      case "GET_SYFY": 
        return { ...state, 
          syfyShows: action.data                            
        };
      case "GET_USA": 
        return { ...state, 
          usaShows: action.data                            
        };
      default:
        return state;
    }
  }
  
  export default ContentR;
  