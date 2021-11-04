import axios from "axios";

import {FETCH_CINEMA_SUCCESS,FETCH_CINEMA_FAILURE} from "../actionTypes";

 export const getCinema= () => dispatch => {
  
      axios.get("http://localhost:5001/cinema")
      .then(response => 
        dispatch({type:FETCH_CINEMA_SUCCESS,payload:response.data}))
        .catch(error => dispatch({type:FETCH_CINEMA_FAILURE,payload:error}))
 }
 




