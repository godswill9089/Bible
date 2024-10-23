import React from 'react';
import HeroGeneral from '../../../Components/HeroGeneral/HeroGeneral';
import Become from '../../../Components/Become/Become';
import ReadyToJoin from '../../../Components/ReadyToJoin/ReadyToJoin';
import SignUp from '../../../Components/Signup/SignUp';
import Footer from '../../../Components/Footer/Footer';
import { useIcons } from '../../../hooks/useIcon';

const Customization = () => {
  const { signUpImgHome } = useIcons();
  return (
    <div className=''>
      {/* temp components, update when design is available */}
      <HeroGeneral title='Customization' info={"..."}/>
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

export default Customization;
