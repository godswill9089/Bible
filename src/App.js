import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { headerRoutes } from './Components/Routes/Route';
import MediaHero from './Components/Pages/Media/MediaHero';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About/AboutUs';
import Product from './Components/Pages/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={headerRoutes.About} element={<AboutUs />} />
        <Route path={headerRoutes.Media} element={<MediaHero />} />
        <Route path={headerRoutes.Product} element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
