import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import HeroProducts from '../../../Components/HeroProducts/HeroProducts';
import Books from '../../../Components/Books/Books';
import FramedArt from '../../../Components/FramedArt/FramedArt';
import Customization from '../../../Components/Customization/Customization';
import ReadyToJoin from '../../../Components/ReadyToJoin/ReadyToJoin';
import { useIcons } from '../../../hooks/useIcon';
import SignUp from '../../../Components/Signup/SignUp';

const Products = () => {
  const { signUpImgHome } = useIcons();
  return (
    <div className='products'>
      <HeroProducts />
      <Books />
      <FramedArt />
      <Customization />
      <ReadyToJoin />
      <SignUp
        text={'Sign up for our weekly newsletter The Good Stuff.'}
        img={signUpImgHome}
      />
      <Footer />
    </div>
  );
};

export default Products;
