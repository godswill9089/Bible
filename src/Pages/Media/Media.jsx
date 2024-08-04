import React from 'react';
import Footer from '../../Components/Footer/Footer';
import ReadyToJoin from '../../Components/ReadyToJoin/ReadyToJoin';
import HeroMedia from '../../Components/HeroMedia/HeroMedia';
import Audio from '../../Components/Audio/Audio';
import Video from '../../Components/Video/Video';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import SignUp from '../../Components/Signup/SignUp';
import { useIcons } from '../../hooks/useIcon';

const Media = () => {
  const { signUpImgHome } = useIcons();
  return (
    <div className='media'>
      <HeroMedia />
      <Audio />
      <Video />
      <SocialMedia />
      {/* <FramedArt /> */}
      {/* <Customization /> */}
      <ReadyToJoin />
      <SignUp
        text='Partner with us to create unique faith-based apparel or other merchandise,
         generating awareness for both organizations.'
        //  download the right image, import and update it with this
        img={signUpImgHome}
      />
      <Footer />
    </div>
  );
};

export default Media;
