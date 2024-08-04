import React from 'react';
import './Info.css';

const Info = ({ text, strong, highlight }) => {
  return (
    <p className={`info-component ${strong && 'strong'} ${highlight && 'highlight'}`}>
      {text}
    </p>
  );
};

export default Info;
