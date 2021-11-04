
import {FETCH_CINEMA_SUCCESS,FETCH_CINEMA_FAILURE} from "../../actions/actionTypes";


const INITIAL_STATE = {
    
    cinemaList: [],
    error:''
    
  };


  function allCinemaReducer  (state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_CINEMA_SUCCESS: 
      return {...state,cinemaList:action.payload}
      case  FETCH_CINEMA_FAILURE:
        return { ...state,error:action.payload}
      default:
         return state;
    }
  };

  export default allCinemaReducer;