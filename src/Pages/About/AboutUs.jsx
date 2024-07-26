import './AboutUs.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/Navbar/Navbar.css';
import { NavLinks } from '../../Components/Navbar/Navlinks';
import logo from '../../Assets/logo.png';
import uk from '../../Assets/Cana.png';
import italy from '../../Assets/italy.png';
import nigeria from '../../Assets/nigeria.png';
import { FaChevronDown } from 'react-icons/fa';
import Vision from '../../Components/Pages/About/Vision';
import MissionCard from '../../Components/Pages/About/MissionCard';
import Coverbg from '../../Components/Pages/About/Coverbg';
import MeetTheTeam from '../../Components/Pages/About/MeetTheTeam';
import AboutSingup from '../../Components/Pages/About/AboutSingup';
import HeroAboutUs from '../../Components/HeroAboutUs/HeroAboutUs';
import OurMission from '../../Components/OurMission/OurMission';
import ReadyToJoin from '../../Components/ReadyToJoin/ReadyToJoin';
import BriefHistory from '../../Components/BriefHistory/BriefHistory';
import Value from '../../Components/Value/Value';

const AboutUs = () => {
  const [active, setActive] = useState(0);
  const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  return (
    <>
      <div className='abt-img'>
        {/* <section className='why-section'>
          <div className='why-content'>
            <h2>Why The Moving Bible?</h2>
            <p>
              In a world filled with words, The Moving Bible exists to ignite
              action. We believe that faith in Jesus Christ shouldn't be
              confined to dusty pages or Sunday sermons. It's a vibrant force
              meant to transform hearts and inspire positive change in the world
              around us.
            </p>
          </div>
        </section> */}
        <HeroAboutUs />
      </div>
      <Vision />
      {/* <MissionCard /> */}
      <OurMission />
      <Coverbg />
      <Value />
      <BriefHistory />
      <ReadyToJoin />
      <MeetTheTeam />
      <AboutSingup />
    </>
  );
};

export default AboutUs;
