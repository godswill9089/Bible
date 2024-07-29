import React, { useEffect, useState } from 'react';
import './HowWedo.css';
import '../About/About.css';
import { FaStarOfLife } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Title from '../../Views/Atoms/Title/Title';

const HowWedo = ({ title, description }) => {
  const [active, setActive] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prevCount) => (prevCount < 3 ? prevCount + 1 : 1));
    }, 3000);

    return () => clearTimeout(timer);
  }, [active]);
  return (
    <div className='About-container how-we-do-component'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'How We Do It'} />
          </div>
          <div className='info'>
            <p className='text'>
              That the purpose of Jesus Christ shall not only be left in the
              holy book but men shall live out these mysteries and as it
              happened in Antioch and new rebirth for the name "Christians"
              would be given.
              <br />
            </p>
            <p className='text'>
              <strong className='strong' >
                We offer various avenues for you to connect with The Moving
                Bible and be part of the movement.
              </strong>
            </p>
          </div>
          <div className={`bg-img-2 carousel-screen-${active}`}>
            <div className='screens'>
              {active === 1 && (
                <div className={`screen ${active === 1 && 'active'}`}>
                  <h1 className='screen-title'>Blog</h1>
                  <p className='screen-info'>
                    Explore our insightful blog featuring inspiring stories,
                    practical tips for living a Christ-like life, and in-depth
                    Bible teachings.
                  </p>
                  <a href='#' className='screen-btn'>
                    Learn More{' '}
                    <span className='arrow'>
                      <FaArrowRight />{' '}
                    </span>
                  </a>
                </div>
              )}
              {active === 2 && (
                <div className={`screen ${active === 2 && 'active'}`}>
                  <h1 className='screen-title'>Volunteer</h1>
                  <p className='screen-info'>
                    Join a vibrant community of volunteers dedicating their time
                    to various initiatives, like community outreach programs or
                    spreading the Gospel online.
                  </p>
                  <a href='#' className='screen-btn'>
                    Learn More{' '}
                    <span className='arrow'>
                      {' '}
                      <FaArrowRight />{' '}
                    </span>
                  </a>
                </div>
              )}
              {active === 3 && (
                <div className={`screen ${active === 3 && 'active'}`}>
                  <h1 className='screen-title'>The TMB Family</h1>
                  <p className='screen-info'>
                    Inspiring stories and highlights from the news and media
                    about the impact God is making through our church.
                  </p>
                  <a href='#' className='screen-btn'>
                    Learn More{' '}
                    <span className='arrow'>
                      {' '}
                      <FaArrowRight />{' '}
                    </span>
                  </a>
                </div>
              )}
            </div>
            <div className='btns'>
              <div
                className={`btn ${active === 1 && 'active'}`}
                onClick={() => setActive(1)}
              ></div>
              <div
                className={`btn ${active === 2 && 'active'}`}
                onClick={() => setActive(2)}
              ></div>
              <div
                className={`btn ${active === 3 && 'active'}`}
                onClick={() => setActive(3)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWedo;
