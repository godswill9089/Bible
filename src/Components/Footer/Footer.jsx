// src/Footer.js
import React from 'react';
import './Footer.css';
import Icon from "../../Assets/TMBsa 1.png"
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-logo">
                    <img src={Icon} alt="the Moving Bible Logo" className="footer-logo-img" />
                    <p>Embodying The Gospel For A New Generation Of Christians...</p>
                </div>
                <div className='footer-gen'>
                    <div className="footer-column">
                        <div className='footer-item'>
                            <div>
                                <h3>About Us</h3>
                                <ul>
                                    <li>Why Moving Bible</li>
                                    <li>Vision</li>
                                    <li>Mission</li>
                                    <li>Identity</li>
                                    <li>Values</li>
                                </ul>
                            </div>
                            <div className='line'></div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className='footer-item'>
                            <div>
                                <h3>Media</h3>
                                <ul>
                                    <li>Podcast</li>
                                    <li>Videos</li>
                                    <li>Reels</li>
                                    <li>Presentation</li>
                                </ul>
                            </div>
                            <div className='line'></div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className='footer-item'>
                            <div>
                                <h3>Products</h3>
                                <ul>
                                    <li>Books</li>
                                    <li>Shirts</li>
                                    <li>Frames</li>
                                    <li>Customization</li>
                                </ul>
                            </div>
                            <div className='line'></div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className='footer-item'>
                            <div>
                                <h3>Services</h3>
                                <ul>
                                    <li>Volunteer</li>
                                    <li>Onsite</li>
                                </ul>
                            </div>
                            <div className='line'></div>
                        </div>
                    </div>
                    <div className="footer-column footer-ul-main">
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
            </div>
            <div className="footer-social">
                <div>
                    <h3>Follow Us</h3>
                </div>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"><IoLogoFacebook /></i></a>
                    <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
                    <a href="#"><i className="fab fa-linkedin"><FaSquareXTwitter /></i></a>
                    <a href="#"><i className="fab fa-youtube"> <PiLinkedinLogo /></i></a>
                    <a href="#"><i className="fab fa-youtube"><FiYoutube /> </i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
