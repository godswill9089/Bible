import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../../Footer/Footer';
import './AboutSingUp.css';

const AboutSingup = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email submitted: ${email}`);
    // Here you can add logic to submit the email to your backend or service
    // Reset the email state after submission if needed
    setEmail('');
  };

  return (
    <div className='sign'>
      <header className='sign-header abt-sign'>
        <h1>Together, we can create a world where faith becomes action</h1>
        {/* <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </form> */}
        <div className='head-submit'>
          <button className='submit'>
            enter email adress
            <div>
              <FaArrowRight className='link3' />
            </div>
          </button>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default AboutSingup;
