
import * as actionTypes from "../../actions/actionTypes";


const INITIAL_STATE = {
    loading: false,
    cinemaList: [],
    isLoading:false,
    error: 'all',
  };


  function allCinemaReducer  (state = INITIAL_STATE, action) {
    switch (action.type) {
      case actionTypes.FETCH_CINEMA_SUCCESS: 
      return action.cinemaList;
      default:
         return state;
    }
  };

  export default allCinemaReducer;