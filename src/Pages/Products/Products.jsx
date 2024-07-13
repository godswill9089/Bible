import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HowWedo from '../../Components/HowWeDo/HowWedo';
import Become from '../../Components/Become/Become';
import SignUp from '../../Components/Signup/SignUp';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';
import HeroProducts from '../../Components/HeroProducts/HeroProducts';
import Books from '../../Components/Books/Books';
import FramedArt from '../../Components/FramedArt/FramedArt';
import Customization from '../../Components/Customization/Customization';
import ReadyToJoin from '../../Components/ReadyToJoin/ReadyToJoin';

const Products = () => {
  return (
    <div className='products'>
      <Navbar />
      <HeroProducts />
      <Books />
      <FramedArt />
      <Customization />
      <ReadyToJoin />
      {/* <HowWedo />
      <Testimonials />
      <Become />
      <SignUp /> */}
      <Footer />
    </div>
  );
};

export default Products;
