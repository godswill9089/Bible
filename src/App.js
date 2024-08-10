import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { headerRoutes } from './Components/Routes/Route';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About/AboutUs';
import Products from './Pages/Products/Products';
import Media from './Pages/Media/Media';
import Layout from './Wrappers/Layout/Layout';
import WhyMovingBible from './Views/NavigationPages/WhyMovingBible/WhyMovingBible';

function App() {
  const children = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home/why-moving-bible',
      element: <WhyMovingBible />,
    },
    {
      path: '/about',
      element: <AboutUs />,
    },
    {
      path: '/media',
      element: <Media />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/services',
      element: <Products />,
    },
    { path: '/home/why-moving-bible', element: <WhyMovingBible /> },
  ];
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
