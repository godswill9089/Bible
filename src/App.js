import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { headerRoutes } from './Components/Routes/Route';
import Home from './Views/Pages/Home/Home';
import AboutUs from './Views/Pages/About/AboutUs';
import Products from './Views/Pages/Products/Products';
import Media from './Views/Pages/Media/Media';
import Layout from './Wrappers/Layout/Layout';
import WhyMovingBible from './Views/NavigationPages/WhyMovingBible/WhyMovingBible';
import Vision from './Views/NavigationPages/Vision/Vision';
import Mission from './Views/NavigationPages/Mission/Mission';
import Values from './Views/NavigationPages/Values/Values';
import History from './Views/NavigationPages/History/History';
import OurTeam from './Views/NavigationPages/OurTeam/OurTeam';
import Podcast from './Views/NavigationPages/Podcast/Podcast';
import Videos from './Views/NavigationPages/Videos/Videos';
import Reels from './Views/NavigationPages/Reels/Reels';
import Presentation from './Views/NavigationPages/Presentation/Presentation';
import Books from './Views/NavigationPages/Books/Books';
import Shirts from './Views/NavigationPages/Shirts/Shirts';
import Frames from './Views/NavigationPages/Frames/Frames';
import Customization from './Views/NavigationPages/Customization/Customization';

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
      path: '/home/vision',
      element: <Vision />,
    },
    {
      path: '/home/mission',
      element: <Mission />,
    },
    {
      path: '/home/values',
      element: <Values />,
    },
    {
      path: '/about-us',
      element: <AboutUs />,
    },
    {
      path: '/about-us/our-mission',
      element: <Mission />,
    },
    {
      path: '/about-us/our-vision',
      element: <Vision />,
    },
    {
      path: '/about-us/our-values',
      element: <Values />,
    },
    {
      path: '/about-us/history',
      element: <History />,
    },
    {
      path: '/about-us/our-team',
      element: <OurTeam />,
    },
    {
      path: '/media',
      element: <Media />,
    },
    {
      path: '/media/podcast',
      element: <Podcast />,
    },
    {
      path: '/media/videos',
      element: <Videos />,
    },
    {
      path: '/media/reels',
      element: <Reels />,
    },
    {
      path: '/media/presentation',
      element: <Presentation />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/products/books',
      element: <Books />,
    },
    {
      path: '/products/shirts',
      element: <Shirts />,
    },
    {
      path: '/products/frames',
      element: <Frames />,
    },
    {
      path: '/products/customization',
      element: <Customization />,
    },
    {
      path: '/services',
      element: <Products />,
    },
    {
      path: '/services/books',
      element: <Books />,
    },
    {
      path: '/services/shirts',
      element: <Shirts />,
    },
    {
      path: '/services/frames',
      element: <Frames />,
    },
    {
      path: '/services/customization',
      element: <Customization />,
    },
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
