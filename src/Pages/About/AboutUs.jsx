import './AboutUs.css';
import React from 'react';
import Vision from '../../Components/Pages/About/Vision';
import MissionCard from '../../Components/Pages/About/MissionCard';
import Coverbg from '../../Components/CoverBg/Coverbg';
import MeetTheTeam from '../../Components/Pages/About/MeetTheTeam';
import HeroAboutUs from '../../Components/HeroAboutUs/HeroAboutUs';
import OurMission from '../../Components/OurMission/OurMission';
import ReadyToJoin from '../../Components/ReadyToJoin/ReadyToJoin';
import BriefHistory from '../../Components/BriefHistory/BriefHistory';
import Value from '../../Components/Value/Value';
import SignUp from '../../Components/Signup/SignUp';
import { useIcons } from '../../hooks/useIcon';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {
  const { signUpImgAbout } = useIcons();

  return (
    <>
      <HeroAboutUs />
      <Vision />
      {/* <MissionCard /> */}
      <OurMission />
      <Coverbg />
      <Value />
      <BriefHistory />
      <ReadyToJoin />
      <MeetTheTeam />
      <SignUp
        text='Together, we can create a world where faith becomes action'
        img={signUpImgAbout}
      />
      <Footer />
    </>
  );
};

export default AboutUs;
