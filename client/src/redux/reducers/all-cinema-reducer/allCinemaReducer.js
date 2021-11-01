
import * as actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
    loading: false,
    cinemaList: [],
    error: '',
  };

  const allCinemaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.FETCH_CINEMA_SUCCESS: return {
        ...state,
        loading: false,
        cinemaList: [...state.cinemaList, ...action.payload],
        error: '',
      };
      default: return state;
    }
  };

  export default allCinemaReducer;