import React, { useState } from 'react';
import './SignUp.css';
import { FaArrowRight } from 'react-icons/fa';

function SignUp({ text, img }) {
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
      <header
        className='sign-header'
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className='info-wrapper'>
          <h1>{text}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='email-wrapper'>
            <input
              type='email'
              placeholder='Enter Email Address'
              value={email}
              onChange={handleEmailChange}
              required
            />
            <span className='icon-wrapper'>
              <FaArrowRight className='icon' />
            </span>
          </div>
        </form>
      </header>
    </div>
  );
}

export default SignUp;
