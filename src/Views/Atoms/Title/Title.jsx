import React from 'react';
import { useIcons } from '../../../hooks/useIcon';
import './Title.css'

const Title = ({ text }) => {
  const { titleIcon } = useIcons();
  return (
    <div className='title-component'>
      <h2>{text}</h2>
      <img src={titleIcon} alt='title icon' />
    </div>
  );
};

export default Title;
