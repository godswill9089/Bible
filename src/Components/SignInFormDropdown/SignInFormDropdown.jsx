import React, { useState } from 'react';
import './SignInFormDropdown.css';
import FormGroup from '../../Views/Atoms/FormGroup/FormGroup';
import Check from '../../Views/Atoms/Check/Check';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import { useDispatch } from 'react-redux';
import { setShowSignInFormDropdown } from '../../Features/sign-in/sign-in_slice';

const SignInFormDropdown = ({ setShowAmNewHereDropdown2 }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    availability: 'weekly',
    time: 'daytime',
    skills: 'online',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='sign-in-form-dropdown-wrapper'>
      <div className='sign-in-form-dropdown'>
        <div className='details-form'>
          <h1>Sign in</h1>
          <p>
            Please sign in with your email and password to access your account.
          </p>

          <form action=''>
            <FormGroup
              title='Email'
              name='email'
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <FormGroup
              title='Phone Number'
              name='phone_number'
              value={formData.phone_number}
              onChange={(e) => handleChange(e)}
            />
          </form>
        </div>
        <div className='other-form'>
          <div className='thank-you'>
            <div className='details'>
              <h5 className='title'>Thank You!</h5>
              <p className='info'>
                Once you log in, you'll have everything you need right at your
                fingertips.
                <br />
                Whether you're here to check updates, manage your settings, or
                explore new options, everything you need will be at your
                fingertips
              </p>
            </div>
            <div className='btn'>
              <ButtonPill
                onClick={() => {
                  dispatch(setShowSignInFormDropdown(false));
                }}
                text={'Sign in'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInFormDropdown;
