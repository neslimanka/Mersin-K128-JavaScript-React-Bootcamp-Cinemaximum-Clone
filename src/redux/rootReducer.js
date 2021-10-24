import { combineReducers } from 'redux';
import moviesCategoryReducer from './reducers/movies-category-reducer/moviesCategoryReducer';
import allMoviesReducer from './reducers/all-movie-reducer/allMoviesReducer';

const rootReducer = combineReducers({
  movieCategory: moviesCategoryReducer,
  allMovies: allMoviesReducer,
});

export default rootReducer;