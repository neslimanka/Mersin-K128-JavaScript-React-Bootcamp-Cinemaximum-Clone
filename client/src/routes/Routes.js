import React, { useEffect }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import App from '../container/App';
import axios from '../axios/axios'
import axios1 from '../axios/axios1'
import Cinema from '../pages/Cinema/Cinema';
import GoldClass from '../pages/GoldClass/GoldClass';
import Cgv from '../pages/CGV/Cgv';
import Uyeol from '../pages/UyeOl/Uyeol';
import CinemaClub from '../pages/CGVCinemaClub/CinemaClub';


const Routes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axios(),axios1());
  }, []);

  return (
    <BrowserRouter>
    
        <Navbar/>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/cinema/" component={Cinema} exact />
          <Route path="/gold-class-salon-sizin/" component={GoldClass} exact />
          <Route path="/cgv-arthouse/" component={Cgv} exact />
          <Route path="/uye-ol/" component={Uyeol} exact />
          <Route path="/cgv-cinema-club/" component={CinemaClub} exact />
       
     
        </Switch>
        <Footer/>
        
      
    </BrowserRouter>
  );
};

export default Routes;