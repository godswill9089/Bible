import React, { useState } from 'react';
import { useIcons } from '../../hooks/useIcon';
import './VoulnteerDropdown.css';
import Info from '../../Views/Atoms/Info/Info';
import Info2 from '../../Views/Atoms/Info2/Info2';
import FormGroup from '../../Views/Atoms/FormGroup/FormGroup';
import { FaCheck } from 'react-icons/fa';
import Check from '../../Views/Atoms/Check/Check';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';

const VoulnteerDropdown = () => {
  const { volunteer } = useIcons();

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
  console.log(formData);

  return (
    <div className='volunteer-dropdown-wrapper'>
      <div className='sign-up-form-dropdown'>
        <div className='img-con'>
          <img src={volunteer} alt='volunteer' />
        </div>
        <div className='con con-1'>
          <h5 className='title'>Volunteer *</h5>
          <div className='info-con'>
            <p className='info'>
              Content Creation: Assist with creating social media posts, blog
              articles, or other inspiring content.
            </p>
            <p className='info'>
              Translation & Editing: Help translate The Moving Bible's resources
              into different languages, expanding our global reach.
            </p>
            <p className='info'>
              Graphic Design: Lend your design skills to create compelling
              visuals for our website and social media platforms.
            </p>
          </div>
          <div className='btn'>
            <ButtonPill
              onClick={() => {
                window.open(
                  'https://youtu.be/z5dV2v1Cvu4?si=u753Y5PnTcqKwRnV',
                  '_blank'
                );
              }}
              text={'Submit'}
            />
          </div>
        </div>
        <div className='con'>
          <h5 className='title'>Onsite *</h5>
          <div className='info-con'>
            <p className='info'>
              Community Outreach Events: Join us as we organize events that
              serve our local community, such as food banks, clothing drives, or
              back-to-school initiatives.
            </p>
            <p className='info'>
              Community Outreach Events: Join us as we organize events that
              serve our local community, such as food banks, clothing drives, or
              back-to-school initiatives.
            </p>
            <p className='info'>
              Administrative Support: Contribute your skills to administrative
              tasks that keep The Moving Bible running smoothly.
            </p>
          </div>
          <div className='btn'>
            <ButtonPill
              onClick={() => {
                window.open(
                  'https://youtu.be/z5dV2v1Cvu4?si=u753Y5PnTcqKwRnV',
                  '_blank'
                );
              }}
              text={'Submit'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoulnteerDropdown;
