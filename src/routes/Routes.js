import React, { useEffect }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LastLocationProvider } from 'react-router-last-location';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import App from '../container/App';
import Movie from '../pages/movie-show-page/Movie';
import MovieCategory from '../pages/movie-category-page/MovieCategory';
import SearchResult from '../pages/search-result-page/SearchResult';
import axios from '../axios/axios'


const Routes = () => {
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axios());
  }, []);

  return (
    <BrowserRouter>
    <LastLocationProvider>
        <Navbar/>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/films/" component={MovieCategory} exact />
          <Route path="/cinema/" component={MovieCategory} exact />
          <Route path="/gold-class-salon-sizin/" component={MovieCategory} exact />
          <Route path="/cgv-arthouse/" component={MovieCategory} exact />
          <Route path="/search/" component={SearchResult} exact />
          <Route path="/:movie/:id" component={Movie} />
     
        </Switch>
        <Footer/>
        </LastLocationProvider>
      
    </BrowserRouter>
  );
};

export default Routes;