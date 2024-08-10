// src/Footer.js
import React from 'react';
import './Footer.css';
import Icon from '../../Assets/TMBsa 1.png';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

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
                  <li onClick={() => navigate('/home/why-moving-bible')}>
                    Why Moving Bible
                  </li>
                  <li onClick={() => navigate('/home/vision')}>Vision</li>
                  <li onClick={() => navigate('/home/mission')}>Mission</li>
                  <li onClick={() => navigate('/home/identity')}>Identity</li>
                  <li onClick={() => navigate('/home/values')}>Values</li>
                </ul>
              </div>
              <div className='footer-column'>
                <h3>Media</h3>
                <ul>
                  <li onClick={() => navigate('/media/podcast')}>Podcast</li>
                  <li onClick={() => navigate('/media/videos')}>Videos</li>
                  <li onClick={() => navigate('/media/reels')}>Reels</li>
                  <li onClick={() => navigate('/media/presentation')}>
                    Presentation
                  </li>
                </ul>
              </div>
              <div className='footer-column'>
                <h3>Products</h3>
                <ul>
                  <li onClick={() => navigate('/products/books')}>Books</li>
                  <li onClick={() => navigate('/products/shirts')}>Shirts</li>
                  <li onClick={() => navigate('/products/frames')}>Frames</li>
                  <li onClick={() => navigate('/products/customization')}>
                    Customization
                  </li>
                </ul>
              </div>
              <div className='footer-column'>
                <h3>Services</h3>
                <ul>
                  <li onClick={() => navigate('/home/why-moving-bible')}>
                    Volunteer
                  </li>
                  <li onClick={() => navigate('/home/why-moving-bible')}>
                    Onsite
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer-ul-main'>
              <h3>Quick Links</h3>
              <ul className='footer-ul'>
                <div className='footer-li'>
                  <li>Godencall</li>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
