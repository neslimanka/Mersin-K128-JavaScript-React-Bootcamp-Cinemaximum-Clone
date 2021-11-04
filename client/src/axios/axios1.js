import axios from 'axios';
import  cinemaAction from '../redux/actions/cinema-actions/cinemaAction'
import  request  from './CINEMA_API';
import {
  fetchMoviesCollectionFailure,
} from '../redux/actions/movies-category-actions/moviesCategoryAction';


const fetchCinemaCollection = () => dispatch => {

  dispatch(cinemaAction);
  Object.entries(request).map((key) => {
    axios.get(key[1])
    .then(response=>{
      const cinemaData=response.data.results;
      dispatch(cinemaAction(cinemaData,key[0]));
      
    })
    .catch(error => {
      const errorMessage = error.message;
      dispatch(fetchMoviesCollectionFailure(errorMessage));
    });
 
  })
};

export default fetchCinemaCollection;