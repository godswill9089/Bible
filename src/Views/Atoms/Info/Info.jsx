import React from 'react';
import './Info.css';

const Info = ({ textTitle, text, strong, highlight }) => {
  return (
    <p
      className={`info-component ${strong && 'strong'} ${
        highlight && 'highlight'
      }`}
    >
      {textTitle && <span>{textTitle}</span>} {text}
    </p>
  );
};

export default Info;
