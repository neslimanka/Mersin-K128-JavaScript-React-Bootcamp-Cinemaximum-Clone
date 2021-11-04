import {FETCH_CINEMA_SUCCESS} from "../actionTypes";



const fetchCinemaSuccess = (cinema) => ({
   type: FETCH_CINEMA_SUCCESS,
   payload: cinema
   
 });
 
 export default fetchCinemaSuccess ;



