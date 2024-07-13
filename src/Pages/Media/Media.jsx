import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import HeroProducts from '../../Components/HeroProducts/HeroProducts';
import Books from '../../Components/Books/Books';
import FramedArt from '../../Components/FramedArt/FramedArt';
import Customization from '../../Components/Customization/Customization';
import ReadyToJoin from '../../Components/ReadyToJoin/ReadyToJoin';

const Media = () => {
  return (
    <div className='media'>
      <Navbar />
      <HeroProducts />
      <Books />
      <FramedArt />
      <Customization />
      <ReadyToJoin />
      <Footer />
    </div>
  );
};

export default Media;
