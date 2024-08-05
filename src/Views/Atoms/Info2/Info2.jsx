import React from 'react';
import './Info2.css';

const Info2 = ({ textTitle, text, strong, highlight }) => {
  return (
    <p
      className={`info-component-2 ${strong && 'strong'} ${
        highlight && 'highlight'
      }`}
    >
      {textTitle && <span>{textTitle}</span>} {text}
    </p>
  );
};

export default Info2;
