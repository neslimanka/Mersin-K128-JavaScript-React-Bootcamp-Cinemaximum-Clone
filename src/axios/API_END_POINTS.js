const API_KEY = "2500c4b48a62c51f8de04354a8ec1079";

const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const requests = {
  Trending: `${BASE_URL}/movie/550?api_key=2500c4b48a62c51f8de04354a8ec1079&language=en-US`,
  Cinemaximum: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  TopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  ActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  RomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  ComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  HorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Drama: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;