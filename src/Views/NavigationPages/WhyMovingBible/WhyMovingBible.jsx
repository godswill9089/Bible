import React from 'react';
import HeroGeneral from '../../../Components/HeroGeneral/HeroGeneral';
import { useIcons } from '../../../hooks/useIcon';
import Become from '../../../Components/Become/Become';
import ReadyToJoin from '../../../Components/ReadyToJoin/ReadyToJoin';
import SignUp from '../../../Components/Signup/SignUp';
import Footer from '../../../Components/Footer/Footer';

const WhyMovingBible = () => {
  const { signUpImgHome } = useIcons();

  return (
    <div className=''>
      {/* temp components, update when design is available */}
      <HeroGeneral title='Why moving bible'
       info={[
          "The Moving Bible is mandate that calls all humans to action on living on Godly principles that found in the bible to a point where the reflection of these Godly principles would be seen across all localities and nations that the humans are embodiments of the glory of God that are manifested in the scriptures."
        ]}
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

export default WhyMovingBible;
