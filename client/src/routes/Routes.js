import React, { useEffect }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import App from '../container/App';
import axios from '../axios/axios'
import Cinema from '../pages/Cinema/Cinema';
import GoldClass from '../pages/GoldClass/GoldClass';


const Routes = () => {
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axios());
  }, []);

  return (
    <BrowserRouter>
    
        <Navbar/>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/cinema/" component={Cinema} exact />
          <Route path="/gold-class-salon-sizin/" component={GoldClass} exact />
       
     
        </Switch>
        <Footer/>
        
      
    </BrowserRouter>
  );
};

export default Routes;