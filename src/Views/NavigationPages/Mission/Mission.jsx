import React from 'react';
import HeroGeneral from '../../../Components/HeroGeneral/HeroGeneral';
import Become from '../../../Components/Become/Become';
import ReadyToJoin from '../../../Components/ReadyToJoin/ReadyToJoin';
import SignUp from '../../../Components/Signup/SignUp';
import Footer from '../../../Components/Footer/Footer';
import { useIcons } from '../../../hooks/useIcon';

const Mission = () => {
  const { signUpImgHome } = useIcons();

  return (
    <div className=''>
      {/* temp components, update when design is available */}
      <HeroGeneral
        title='Mission'
        info='We aim to transform individuals and families through God’s word written in the bible, which transcends to transformation in our society, nations and the world at large. The moving bible shall serve as a movement to transform hearts and inspire positive change in the world around us.'
      />
      <Become />
      <ReadyToJoin />
      <SignUp
        text={'Sign up for our weekly newsletter The Good Stuff.'}
        img={signUpImgHome}
      />
      <Footer />
    </div>
  );
};

export default Mission;
