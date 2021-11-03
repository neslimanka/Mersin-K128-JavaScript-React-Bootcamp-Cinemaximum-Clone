import axios from 'axios';
import  request  from './CINEMA_API';

import  { getCinemaSuccess } from '../redux/actions/cinema-actions/cinemaAction'



const fetchCinema = () => dispatch => {
  dispatch(getCinemaSuccess);
  Object.entries(request).map(() => {
    axios.get()
    .then(response=>{
      const cinemaData=response.data.results;
      dispatch(getCinemaSuccess(cinemaData));
    })
 
  })
};


export default fetchCinema;