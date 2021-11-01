import * as actionTypes from "../actionTypes";
import * as api from "../../../util/api"



export const getCinemaSuccess=cinema =>({
   type:actionTypes.FETCH_CINEMA_SUCCESS,cinema
})

export const fetchCinema=()=>dispatch=>
api.getAllCinema().then(cinema=>dispatch(getCinemaSuccess(cinema)))

