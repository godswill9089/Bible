import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';
const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <main>{<Outlet />}</main>
    </div>
  );
};

export default Layout;
