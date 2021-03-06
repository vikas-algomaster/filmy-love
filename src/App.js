import React, { useState } from 'react';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import TrendingMovies from './components/TrendingMovies';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Favourites from './components/Favourites';


const App = () => {

  return(
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<> 
          <Banner />
          <TrendingMovies />
          </>} />
        <Route path='/favourites' element={<Favourites />} />
        {/* </Route> */}
      </Routes>
    </Router>
    </>
  )
};

export default App;
