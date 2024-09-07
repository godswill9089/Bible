import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import Volunteer from './Views/NavigationPages/Volunteer/Volunteer';
import Onsite from './Views/NavigationPages/Onsite/Onsite';
import Identity from './Views/NavigationPages/Identity/Identity';
import Donate from './Views/Pages/Donate/Donate';

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
      path: '/home/identity',
      element: <Identity />,
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
      path: '/services/volunteer',
      element: <Volunteer />,
    },
    {
      path: '/services/onsite',
      element: <Onsite />,
    },
    {
      path: '/donate',
      element: <Donate />,
    },
    {
      path: '/donate/donate-now',
      element: <Donate />,
    },
    {
      path: '/donate/why-donate',
      element: <Donate />,
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
