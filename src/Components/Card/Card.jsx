import React from 'react';
import './Card.css';
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, description, }) => {
  return (
    <div className="card-component">
      <div className="card-top-bar"></div>
      <div className='card-top'>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href="#" className="card-link">
          Learn More <span className="arrow"> <FaArrowRight /> </span>
        </a>
      </div>
    </div>
  );
};

export default Card;