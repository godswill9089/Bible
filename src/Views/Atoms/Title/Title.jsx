import React from 'react';
import { useIcons } from '../../../hooks/useIcon';
import './Title.css';

const Title = ({ text, light }) => {
  const { titleIcon, titleIconLight } = useIcons();
  return (
    <div className='title-component-wrapper'>
      <div className={`title-component ${light && 'title-component-light'}`}>
        <h2>{text}</h2>
        <img src={light ? titleIconLight : titleIcon} alt='title icon' />
      </div>
    </div>
  );
};

export default Title;
