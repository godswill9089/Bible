import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import HowWedo from '../../Components/HowWeDo/HowWedo';
import Become from '../../Components/Become/Become';
import SignUp from '../../Components/Signup/SignUp';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';
import ReadyToJoin from '../../Components/ReadyToJoin/ReadyToJoin';
import { useIcons } from '../../hooks/useIcon';

const Home = () => {
  const { signUpImgHome } = useIcons();
  return (
    <div className='Home'>
      <Hero />
      <About />
      <HowWedo />
      <Testimonials />
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

export default Home;
