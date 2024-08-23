import React from 'react';
// import VolunteerCard from './VolunteerCard';
import './PopUpItem.css';
import PopUp from './PopUp';

const PopUpItems = ({
  setShowAmNewHereDropdown1,
  setShowAmNewHereDropdown2,
}) => {
  const volunteerItems = [
    {
      heading: 'Content creation',
      text: 'Assist with creating social media posts, blog articles, or other inspiring content.',
    },
    {
      heading: 'Translation & editing',
      text: 'Help translate resources into different languages, expanding our global reach.',
    },
    {
      heading: 'Graphic design',
      text: 'Lend your design skills to create compelling visuals for our website and social media platforms.',
    },
  ];

  const onsiteItems = [
    {
      heading: 'Community outreach events',
      text: 'Join us as we organize events that serve our local community, such as food banks, clothing drives, or back-to-school initiatives.',
    },
    {
      heading: 'Administrative support',
      text: 'Contribute your skills to administrative tasks that keep the moving bible running smoothly.',
    },
  ];

  return (
    <div className='volunteer-section'>
      <PopUp
        title='Volunteer'
        items={volunteerItems}
        setShowAmNewHereDropdown1={setShowAmNewHereDropdown1}
        setShowAmNewHereDropdown2={setShowAmNewHereDropdown2}
      />
      <PopUp
        title='Onsite'
        items={onsiteItems}
        setShowAmNewHereDropdown1={setShowAmNewHereDropdown1}
        setShowAmNewHereDropdown2={setShowAmNewHereDropdown2}
      />
    </div>
  );
};

export default PopUpItems;
