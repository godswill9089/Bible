import React from 'react';
import HeroGeneral from '../../../Components/HeroGeneral/HeroGeneral';
import Become from '../../../Components/Become/Become';
import ReadyToJoin from '../../../Components/ReadyToJoin/ReadyToJoin';
import SignUp from '../../../Components/Signup/SignUp';
import Footer from '../../../Components/Footer/Footer';
import { useIcons } from '../../../hooks/useIcon';

const Donate = () => {
  const { signUpImgHome } = useIcons();

  return (
    <div className=''>
      {/* temp components, update when design is available */}
      <HeroGeneral
        title='Donate'
        info='To be able use the resources to reach the teaming population who have heard the gospel of Jesus Christ. We intend utilize goodwill donations as low $1 to first provide assistance to rural communities with no access to constantly hear the word of God. Gospel materials such as bible, clothing, frames and other products would also be donated to these vulnerable people free through the donations received. It is also an opportunity to partake in the kingdom works and active the blessings that comes from this movement for God.'
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

export default Donate;
