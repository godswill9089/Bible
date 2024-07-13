import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Books from '../../Components/Books/Books';
import FramedArt from '../../Components/FramedArt/FramedArt';
import Customization from '../../Components/Customization/Customization';
import ReadyToJoin from '../../Components/ReadyToJoin/ReadyToJoin';
import HeroMedia from '../../Components/HeroMedia/HeroMedia';
import Audio from '../../Components/Audio/Audio';

const Media = () => {
  return (
    <div className='media'>
      <HeroMedia />
      <Audio />
      {/* <FramedArt /> */}
      {/* <Customization /> */}
      <ReadyToJoin />
      <Footer />
    </div>
  );
};

export default Media;
