import React from 'react';
import { useIcons } from '../../../hooks/useIcon';
import './Links.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Links = () => {
  return (
    <div className='links-component'>
      <div className='link facebook'>
        <FaFacebook />
      </div>
      <div className='link twitter'>
        <FaTwitter />
      </div>
      <div className='link instagram'>
        <FaInstagram />
      </div>
      <div className='link whatsapp'>
        <FaLinkedin />
      </div>
      <div className='link youtube'>
        <FaYoutube />
      </div>
    </div>
  );
};

export default Links;
