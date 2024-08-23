import React, { useState } from 'react';
import { useIcons } from '../../hooks/useIcon';
import './VoulnteerDropdown.css';

import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';

const VoulnteerDropdown = ({
  setShowAmNewHereDropdown1,
  setShowAmNewHereDropdown2,
}) => {
  const { volunteer } = useIcons();

  return (
    <div className='volunteer-dropdown-wrapper'>
      <div className='sign-up-form-dropdown'>
        <div className='img-con'>
          <img src={volunteer} alt='volunteer' />
        </div>
        <div className='other'>
          <div className='con con-1'>
            <h5 className='title'>Volunteer *</h5>
            <div className='info-con'>
              <p className='info'>
                Content Creation: Assist with creating social media posts, blog
                articles, or other inspiring content.
              </p>
              <p className='info'>
                Translation & Editing: Help translate The Moving Bible's
                resources into different languages, expanding our global reach.
              </p>
              <p className='info'>
                Graphic Design: Lend your design skills to create compelling
                visuals for our website and social media platforms.
              </p>
            </div>
            <div className='btn'>
              <ButtonPill
                onClick={() => {
                  setShowAmNewHereDropdown1(false);
                  setShowAmNewHereDropdown2(true);
                }}
                text={'Sign Up'}
              />
            </div>
          </div>
          <div className='con'>
            <h5 className='title'>Onsite *</h5>
            <div className='info-con'>
              <p className='info'>
                Community Outreach Events: Join us as we organize events that
                serve our local community, such as food banks, clothing drives,
                or back-to-school initiatives.
              </p>
              <p className='info'>
                Community Outreach Events: Join us as we organize events that
                serve our local community, such as food banks, clothing drives,
                or back-to-school initiatives.
              </p>
              <p className='info'>
                Administrative Support: Contribute your skills to administrative
                tasks that keep The Moving Bible running smoothly.
              </p>
            </div>
            <div className='btn'>
              <ButtonPill
                onClick={() => {
                  setShowAmNewHereDropdown1(false);
                  setShowAmNewHereDropdown2(true);
                }}
                text={'Sign Up'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoulnteerDropdown;
