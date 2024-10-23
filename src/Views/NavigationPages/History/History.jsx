import React from 'react';
import HeroGeneral from '../../../Components/HeroGeneral/HeroGeneral';
import Become from '../../../Components/Become/Become';
import ReadyToJoin from '../../../Components/ReadyToJoin/ReadyToJoin';
import SignUp from '../../../Components/Signup/SignUp';
import Footer from '../../../Components/Footer/Footer';
import { useIcons } from '../../../hooks/useIcon';
import "./History.css";
import MeetTheTeam from '../../../Components/Pages/About/MeetTheTeam';
import BriefHistory from '../../../Components/BriefHistory/BriefHistory';

const History = () => {
  const { signUpImgHome } = useIcons();

  return (
    <div className=''>
      {/* temp components, update when design is available */}
      <HeroGeneral title='History'
        className="scrollable-text"
        info='The moving bible is a faith-based organization which has a mandate to spread the gospel of Jesus Christ all over...' />
      <BriefHistory />
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

export default History;
