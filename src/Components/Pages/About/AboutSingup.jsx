import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../../Footer/Footer';
import './AboutSingUp.css';

const AboutSingup = ({ text, img }) => {
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
        <h1>{text}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Enter Email Address'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </form>
        {/* <div className='head-submit'>
          <button className='submit'>
            enter email adress
            <div>
              <FaArrowRight className='link3' />
            </div>
          </button>
        </div> */}
      </header>
 
    </div>
  );
};

export default AboutSingup;
