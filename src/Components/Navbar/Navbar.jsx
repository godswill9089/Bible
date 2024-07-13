import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { NavLinks } from './Navlinks';
import logo from '../../Assets/tmb logo.png';
import { FaChevronDown } from 'react-icons/fa';
import { useIcons } from '../../hooks/useIcon';

const Navbar = () => {
  const { nigeria, china, uk } = useIcons();
  const [active, setActive] = useState(0);
  const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  const location = useLocation();
  const { logoWhite } = useIcons();
  const navigate = useNavigate();
  return (
    <div
      className={`navbar-component ${
        location.pathname !== '/' && 'navbar-component-other'
      }`}
    >
      <div className='container'>
        <div className='content'>
          <div className='navbar-items-wrapper'>
            <div className='logo-wrapper' onClick={() => navigate('/')}>
              <img
                src={location.pathname === '/' ? logo : logoWhite}
                alt=''
                className='logo'
              />
            </div>
            <div className='nav-main-wrapper'>
              <ul className='nav-main'>
                {NavLinks.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className='nav-wrapper'
                      onMouseEnter={() => setActive(item.id)}
                      onMouseLeave={() => setActive(0)}
                    >
                      <div
                        onMouseEnter={() => setActive(item.id)}
                        onMouseLeave={() => setActive(0)}
                      >
                        <Link to={item.link}>
                          <span
                            className={`link-text ${
                              location.pathname !== '/' && 'link-text-other'
                            }`}
                          >
                            {item.title}
                          </span>
                        </Link>
                      </div>
                      {active === item.id && (
                        <div
                          className='dropdown'
                          onMouseEnter={() => setActive(item.id)}
                          onMouseLeave={() => setActive(0)}
                        >
                          {active === 1 && (
                            <div
                              className='dropdown-link'
                              onMouseEnter={() => setActive(item.id)}
                              onMouseLeave={() => setActive(0)}
                            >
                              <li>
                                <Link>Why Moving Bible</Link>
                              </li>
                              <li>
                                <Link>Vision</Link>
                              </li>
                              <li>
                                <Link>Mission</Link>
                              </li>
                              <li>
                                <Link>identity</Link>
                              </li>
                              <li>
                                <Link>Values</Link>
                              </li>
                            </div>
                          )}
                          {active === 2 && (
                            <div
                              className='dropdown-link drop2'
                              onMouseEnter={() => setActive(item.id)}
                              onMouseLeave={() => setActive(0)}
                            >
                              <li>
                                <Link>Our Mission</Link>
                              </li>
                              <li>
                                <Link>Our Vission</Link>
                              </li>
                              <li>
                                <Link>Our Values</Link>
                              </li>
                              <li>
                                <Link>History</Link>
                              </li>
                              <li>
                                <Link>Our Team</Link>
                              </li>
                            </div>
                          )}
                          {active === 3 && (
                            <div
                              className='dropdown-link '
                              onMouseEnter={() => setActive(item.id)}
                              onMouseLeave={() => setActive(0)}
                            >
                              <li>
                                <Link>Podcast</Link>
                              </li>
                              <li>
                                <Link>Videos</Link>
                              </li>
                              <li>
                                <Link>Reels</Link>
                              </li>
                              <li>
                                <Link>Presentation</Link>
                              </li>
                            </div>
                          )}
                          {active === 4 && (
                            <div
                              className='dropdown-link drop'
                              onMouseEnter={() => setActive(item.id)}
                              onMouseLeave={() => setActive(0)}
                            >
                              <li>
                                <Link>Book</Link>
                              </li>
                              <li>
                                <Link>Shirts</Link>
                              </li>
                              <li>
                                <Link>Frame</Link>
                              </li>
                              <li>
                                <Link>Customization</Link>
                              </li>
                            </div>
                          )}
                          {active === 5 && <div></div>}
                        </div>
                      )}
                      {/* {active === item.id && <div className='dropdown'>dropdown2</div>}
              {active === item.id && <div className='dropdown'>dropdown3</div>}
              {active === item.id && <div className='dropdown'>dropdown4</div>}
              {active === item.id && <div className='dropdown'>dropdown5</div>} */}
                    </li>
                  );
                })}
              </ul>
              <div
                className={`country-wrapper ${
                  location.pathname !== '/' && 'country-wrapper-other'
                }`}
              >
                <div className='country'>
                  <img src={nigeria} alt='' className='nigeria' />
                  <img src={china} alt='' className='italy' />
                  <img src={uk} alt='' className='uk' />
                </div>
                <div className='lang'>
                  <div className='en'>
                    <p>En</p>
                  </div>
                  <div className='icon'>
                    <FaChevronDown
                      onMouseEnter={() => setShowCountriesDropdown(true)}
                      onMouseLeave={() => setShowCountriesDropdown(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`nav-btn-wrapper`}>
              <button
                className={`nav-btn ${
                  location.pathname !== '/' && 'nav-btn-other'
                }`}
              >
                Am New Here
              </button>
            </div>
          </div>
          <div className='countries-dropdown-wrapper'>
            {showCountriesDropdown && (
              <div className='countries-dropdown'>hello</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
