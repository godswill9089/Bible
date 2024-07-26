// src/Footer.js
import React from 'react';
import './Footer.css';
import Icon from '../../Assets/TMBsa 1.png';
import { IoLogoFacebook } from 'react-icons/io5';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { PiLinkedinLogo } from 'react-icons/pi';
import { FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='footer footer-component'>
      <div className='footer-columns'>
        <div className='footer-logo'>
          <img
            src={Icon}
            alt='the Moving Bible Logo'
            className='footer-logo-img'
          />
          <p>Transforming the lives of people through the scriptures</p>
        </div>
        <div className='footer-gen-con'>
          <div className='footer-gen-wrapper'>
            <div className='footer-gen'>
              <div className='footer-column'>
                <h3>About Us</h3>
                <ul>
                  <li>Why Moving Bible</li>
                  <li>Vision</li>
                  <li>Mission</li>
                  <li>Identity</li>
                  <li>Values</li>
                </ul>
              </div>
              <div className='footer-column'>
                <h3>Media</h3>
                <ul>
                  <li>Podcast</li>
                  <li>Videos</li>
                  <li>Reels</li>
                  <li>Presentation</li>
                </ul>
              </div>
              <div className='footer-column'>
                <h3>Products</h3>
                <ul>
                  <li>Books</li>
                  <li>Shirts</li>
                  <li>Frames</li>
                  <li>Customization</li>
                </ul>
              </div>
              <div className='footer-column'>
                <h3>Services</h3>
                <ul>
                  <li>Volunteer</li>
                  <li>Onsite</li>
                </ul>
              </div>
            </div>
            <div className='footer-ul-main'>
              <h3>Quick Links</h3>
              <ul className='footer-ul'>
                <div className='footer-li'>
                  <li>Godencell</li>
                </div>
                <div className='footer-li'>
                  <li>CartOn</li>
                </div>
                <div className='footer-li'>
                  <li>Tenda IT</li>
                </div>
              </ul>
            </div>
          </div>
          <div className='footer-social'>
            <h3>Follow Us</h3>
            <div className='social-icons-wrapper'>
              <a href='https://www.facebook.com' target='blanc'>
                <FaFacebook className='icon' />
              </a>
              <a href='https://www.twitter.com' target='blanc'>
                <FaTwitter className='icon' />
              </a>
              <a href='https://www.instagram.com' target='blanc'>
                <FaInstagram className='icon' />
              </a>
              <a href='https://www.linkedin.com' target='blanc'>
                <FaLinkedin className='icon' />
              </a>
              <a href='https://www.youtube.com' target='blanc'>
                <FaYoutube className='icon' />
              </a>
              {/* <a href='#'>
                <i className='fab fa-instagram'>
                  <FaInstagram />
                </i>
              </a>
              <a href='#'>
                <i className='fab fa-linkedin'>
                  <FaSquareXTwitter />
                </i>
              </a>
              <a href='#'>
                <i className='fab fa-youtube'>
                  {' '}
                  <PiLinkedinLogo />
                </i>
              </a>
              <a href='#'>
                <i className='fab fa-youtube'>
                  <FiYoutube />{' '}
                </i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
