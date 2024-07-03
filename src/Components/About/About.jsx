import React, {useState} from 'react'
import "./About.css";
import { FaArrowLeft, FaStarOfLife } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import CardContainer from '../Card/CardContainer';

const About = () => {
  const [translateSize, setTranslateSize] = useState(0);
  const [direction, setDirection] = useState('');
  const handleTranslate = (direction) => {
    if (direction === 'left') {
      if (translateSize === 0) {
        setTranslateSize(210);
      } else {
        setTranslateSize(translateSize - 42);
      }
    } else {
      if (translateSize === 210) {
        setTranslateSize(0);
      } else {
        setTranslateSize(translateSize + 42);
      }
    }
    setDirection(direction);
  };
  return (
    <div className='About-container'>
      <div className='About-header-text'>
        <h2>
          Learn About who we Are
        </h2>
        <div>
          <FaStarOfLife className='ico' />
        </div>
      </div>
      <div className='about-p'>
        <div>
          <p>
            Welcome to The Moving Bible!
            We are a passionate community dedicated to
            bringing the Gospel of Jesus Christ to life.
            We believe that faith should not just be words,
            but a driving force for positive change in the world.
          </p>
          <p>
            Our vision is ambitious: to inspire and equip 1
            billion souls to live Christ-like lives in the
            next ten years. Imagine a world where the teachings
            of the Bible are reflected in everyday actions,
            transforming communities and individuals.
          </p>
        </div>
        <div className='btn-about'>
          <button className={`btns ${direction === 'left' && 'active'}`}
            onClick={() => handleTranslate('left')}><FaArrowLeft /></button>
          <button className={`btns ${direction === 'right' && 'active'}`}
            onClick={() => handleTranslate('right')}><FaArrowRight /></button>
        </div>
      </div>
      <CardContainer />
    </div>
  )
}

export default About