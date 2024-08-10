import React from 'react';
import Footer from '../../Components/Footer/Footer';
import ReadyToJoin from '../../Components/ReadyToJoin/ReadyToJoin';
import HeroMedia from '../../Components/HeroMedia/HeroMedia';
import Audio from '../../Components/Audio/Audio';
import Video from '../../Components/Video/Video';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import HeroAboutUs from '../../Components/HeroAboutUs/HeroAboutUs';
import Vision from '../../Components/Pages/About/Vision';
import OurMission from '../../Components/OurMission/OurMission';
import Value from '../../Components/Value/Value';
import CoverBg from '../../Components/CoverBg/Coverbg';
import BriefHistory from '../../Components/BriefHistory/BriefHistory';
import MeetTheTeam from '../../Components/Pages/About/MeetTheTeam';
import SignUp from '../../Components/Signup/SignUp';
import { useIcons } from '../../hooks/useIcon';

const WhyMovingBible = () => {
  const { signUpImgAbout } = useIcons();
  return (
    <div className=''>
      <HeroAboutUs />
    </div>
  );
};

export default WhyMovingBible;
