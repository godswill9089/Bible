import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import HeroProducts from '../../../Components/HeroProducts/HeroProducts';
import Books from '../../../Components/Books/Books';
import FramedArt from '../../../Components/FramedArt/FramedArt';
import Customization from '../../../Components/Customization/Customization';
import ReadyToJoin from '../../../Components/ReadyToJoin/ReadyToJoin';

const Products = () => {
  return (
    <div className='products'>
      <HeroProducts />
      <Books />
      <FramedArt />
      <Customization />
      <ReadyToJoin />
      <Footer />
    </div>
  );
};

export default Products;
