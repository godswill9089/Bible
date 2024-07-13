import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import About from '../../Components/About/About';
import HowWedo from '../../Components/HowWeDo/HowWedo';
import Become from '../../Components/Become/Become';
import SignUp from '../../Components/Signup/SignUp';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';


const Home = () => {
    return (
        <div className="Home">
            {/* <Navbar /> */}
            <Hero />
            <About />
            <HowWedo />
            <Testimonials />
            <Become />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Home;