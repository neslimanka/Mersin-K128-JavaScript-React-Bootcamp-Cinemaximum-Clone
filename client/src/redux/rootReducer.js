import { combineReducers } from 'redux';
import moviesCategoryReducer from './reducers/movies-category-reducer/moviesCategoryReducer';
import allMoviesReducer from './reducers/all-movie-reducer/allMoviesReducer';
import allCinemaReducer from './reducers/all-cinema-reducer/allCinemaReducer';

const rootReducer = combineReducers({
  movieCategory: moviesCategoryReducer,
  allMovies: allMoviesReducer,
  allCinema:allCinemaReducer
});

export default rootReducer;