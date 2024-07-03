import React from 'react'
import "./Become.css";
import { FaArrowRight } from 'react-icons/fa';

const Become = () => {
  return (
      <>
          <div className='banner ban'>
              <div className="banner">
                  <div className="text-content">
                      <h1>Become A Volunteer</h1>
                      <p>
                          Join A Vibrant Community Dedicating Their Time To Various Initiatives, Like Community Outreach Programs Or Spreading The Gospel Online.
                      </p>
                      <a href="#" className="watch-button">Watch Now
                          <div>
                              <FaArrowRight className='link' />
                          </div>
                      </a>
                  </div>
                  <div className="video-content">
                      <div className="video-placeholder">
                          <div className="play-button"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="join">
              <header className="join-header">
                  <h1>Ready to join us in making a difference?</h1>
                  <p>Choose your path</p>
                  <button className='btn'>
                      Join the Movement
                      <div>
                          <FaArrowRight className='link2' />
                      </div>
                  </button>
              </header>
          </div>
      </>
  )
}

export default Become