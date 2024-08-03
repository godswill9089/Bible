import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { navLinks } from './navlinks';
import logo from '../../Assets/tmb logo.png';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { useIcons } from '../../hooks/useIcon';

const Navbar = () => {
  const { nigeria, china, uk } = useIcons();
  const [active, setActive] = useState(0);
  const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  const location = useLocation();
  const { logoWhite } = useIcons();
  const navigate = useNavigate();
  const homeContainer = useRef(null);
  const [homeContainerHeight, setHomeContainerHeight] = useState(0);
  const navMainMobileContainer = useRef(null);
  const [navMainMobileContainerHeight, setNavMainMobileContainerHeight] =
    useState(0);
  const [showNavMainMobileContainer, setShowNavMainMobileContainer] =
    useState(false);
  useEffect(() => {
    const homeContainerHeight =
      homeContainer.current?.getBoundingClientRect().height;
    setHomeContainerHeight(homeContainerHeight);
    const navMainMobileContainerHeight =
      navMainMobileContainer.current?.getBoundingClientRect().height;
    setNavMainMobileContainerHeight(navMainMobileContainerHeight);
  }, [active]);
  // console.log('active', active);

  // console.log('homeContainerHeight', homeContainerHeight);
  console.log('navMainMobileContainerHeight', navMainMobileContainerHeight);

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
            <div className='nav-items-con'>
              <div className='desktop-view'>
                <div className='nav-main-wrapper'>
                  <ul className='nav-main'>
                    <li
                      className='nav-wrapper'
                      onMouseOver={() => setActive(1)}
                      onMouseLeave={() => setActive(0)}
                    >
                      <div
                        onClick={() => navigate('/')}
                        className={`nav-text ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${active === 1 && 'active'}`}
                      >
                        Home <FaChevronDown className='icon' />
                      </div>
                      {active === 1 && (
                        <div className='dropdown-links-wrapper'>
                          <div className='dropdown-links-con'>
                            <div className='dropdown-links'>
                              <li onClick={() => navigate('/')}>
                                Why Moving Bible
                              </li>
                              <li onClick={() => navigate('/')}>Vision</li>
                              <li onClick={() => navigate('/')}>Mission</li>
                              <li onClick={() => navigate('/')}>identity</li>
                              <li onClick={() => navigate('/')}>Values</li>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li
                      className='nav-wrapper'
                      onMouseOver={() => setActive(2)}
                      onMouseLeave={() => setActive(0)}
                    >
                      <div
                        onClick={() => navigate('/about')}
                        className={`nav-text ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${
                          (location.pathname.includes('/about') ||
                            active === 2) &&
                          'active'
                        }`}
                      >
                        About Us
                        <FaChevronDown className='icon' />
                      </div>
                      {active === 2 && (
                        <div className='dropdown-links-wrapper about-us'>
                          <div className='dropdown-links-con'>
                            <div className='dropdown-links'>
                              <li onClick={() => navigate('/about')}>
                                Our Mission
                              </li>
                              <li onClick={() => navigate('/about')}>
                                Our Vision
                              </li>
                              <li onClick={() => navigate('/about')}>
                                Our Values
                              </li>
                              <li onClick={() => navigate('/about')}>
                                History
                              </li>
                              <li onClick={() => navigate('/about')}>
                                Our team
                              </li>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li
                      className='nav-wrapper'
                      onMouseOver={() => setActive(3)}
                      onMouseLeave={() => setActive(0)}
                    >
                      <div
                        onClick={() => navigate('/media')}
                        className={`nav-text ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${
                          (location.pathname.includes('/media') ||
                            active === 3) &&
                          'active'
                        }`}
                      >
                        Media
                        <FaChevronDown className='icon' />
                      </div>
                      {active === 3 && (
                        <div className='dropdown-links-wrapper'>
                          <div className='dropdown-links-con'>
                            <div className='dropdown-links'>
                              <li onClick={() => navigate('/media')}>
                                Podcast
                              </li>
                              <li onClick={() => navigate('/media')}>Videos</li>
                              <li onClick={() => navigate('/media')}>Reels</li>
                              <li onClick={() => navigate('/media')}>
                                Presentation
                              </li>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li
                      className='nav-wrapper'
                      onMouseOver={() => setActive(4)}
                      onMouseLeave={() => setActive(0)}
                    >
                      <div
                        onClick={() => navigate('/products')}
                        className={`nav-text ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${
                          (location.pathname.includes('/products') ||
                            active === 4) &&
                          'active'
                        }`}
                      >
                        Products
                        <FaChevronDown className='icon' />
                      </div>
                      {active === 4 && (
                        <div className='dropdown-links-wrapper products'>
                          <div className='dropdown-links-con'>
                            <div className='dropdown-links'>
                              <li onClick={() => navigate('/products')}>
                                Books
                              </li>
                              <li onClick={() => navigate('/products')}>
                                Shirts
                              </li>
                              <li onClick={() => navigate('/products')}>
                                Frames
                              </li>
                              <li onClick={() => navigate('/products')}>
                                Customization
                              </li>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li
                      className='nav-wrapper'
                      onMouseOver={() => setActive(5)}
                      onMouseLeave={() => setActive(0)}
                    >
                      <div
                        onClick={() => navigate('/services')}
                        className={`nav-text ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${
                          (location.pathname.includes('/services') ||
                            active === 5) &&
                          'active'
                        }`}
                      >
                        Services
                        <FaChevronDown className='icon' />
                      </div>
                      {active === 5 && (
                        <div className='dropdown-links-wrapper'>
                          <div className='dropdown-links-con'>
                            <div className='dropdown-links'>
                              <li onClick={() => navigate('/services')}>
                                Vision
                              </li>
                              <li onClick={() => navigate('/services')}>
                                Mission
                              </li>
                              <li onClick={() => navigate('/services')}>
                                identity
                              </li>
                              <li onClick={() => navigate('/services')}>
                                Values
                              </li>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
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
              </div>
              <div
                className={`hamburger ${
                  location.pathname !== '/' && 'other'
                }`}
                onClick={() =>
                  setShowNavMainMobileContainer(!showNavMainMobileContainer)
                }
              >
                <FaBars />
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
          <div className='mobile-view-con'>
            <div className='mobile-view-wrapper'>
              <div
                className='mobile-view'
                style={{
                  height: showNavMainMobileContainer
                    ? `${navMainMobileContainerHeight + 100}px`
                    : 0,
                }}
              >
                <div className='nav-con-mobile'>
                  <ul className='nav-main-mobile' ref={navMainMobileContainer}>
                    <li
                      className='nav-wrapper-mobile'
                      onClick={() => setActive(1)}
                    >
                      <div
                        onClick={() => navigate('/')}
                        className={`nav-text-mobile ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${active === 1 && 'active'}`}
                      >
                        Home <FaChevronDown className='icon' />
                      </div>
                      <div
                        className='dropdown-links-wrapper-mobile'
                        style={{
                          height: active === 1 ? `${homeContainerHeight}px` : 0,
                        }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/')}>
                            Why Moving Bible
                          </li>
                          <li onClick={() => navigate('/')}>Vision</li>
                          <li onClick={() => navigate('/')}>Mission</li>
                          <li onClick={() => navigate('/')}>identity</li>
                          <li onClick={() => navigate('/')}>Values</li>
                        </div>
                      </div>
                    </li>
                    <li
                      className='nav-wrapper-mobile'
                      onClick={() => setActive(2)}
                    >
                      <div
                        onClick={() => navigate('/about')}
                        className={`nav-text-mobile ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${active === 2 && 'active'}`}
                      >
                        About us <FaChevronDown className='icon' />
                      </div>
                      <div
                        className='dropdown-links-wrapper-mobile'
                        style={{
                          height: active === 2 ? `${homeContainerHeight}px` : 0,
                        }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/about')}>
                            Our Mission
                          </li>
                          <li onClick={() => navigate('/about')}>Our Vision</li>
                          <li onClick={() => navigate('/about')}>Our Values</li>
                          <li onClick={() => navigate('/about')}>History</li>
                          <li onClick={() => navigate('/about')}>Our team</li>
                        </div>
                      </div>
                    </li>
                    <li
                      className='nav-wrapper-mobile'
                      onClick={() => setActive(3)}
                    >
                      <div
                        onClick={() => navigate('/media')}
                        className={`nav-text-mobile ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${active === 3 && 'active'}`}
                      >
                        Media <FaChevronDown className='icon' />
                      </div>
                      <div
                        className='dropdown-links-wrapper-mobile'
                        style={{
                          height: active === 3 ? `${homeContainerHeight}px` : 0,
                        }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/media')}>Podcast</li>
                          <li onClick={() => navigate('/media')}>Videos</li>
                          <li onClick={() => navigate('/media')}>Reels</li>
                          <li onClick={() => navigate('/media')}>
                            Presentation
                          </li>
                        </div>
                      </div>
                    </li>
                    <li
                      className='nav-wrapper-mobile'
                      onClick={() => setActive(4)}
                    >
                      <div
                        onClick={() => navigate('/products')}
                        className={`nav-text-mobile ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${active === 4 && 'active'}`}
                      >
                        Products <FaChevronDown className='icon' />
                      </div>
                      <div
                        className='dropdown-links-wrapper-mobile'
                        style={{
                          height: active === 4 ? `${homeContainerHeight}px` : 0,
                        }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/products')}>Books</li>
                          <li onClick={() => navigate('/products')}>Shirts</li>
                          <li onClick={() => navigate('/products')}>Frames</li>
                          <li onClick={() => navigate('/products')}>
                            Customization
                          </li>
                        </div>
                      </div>
                    </li>
                    <li
                      className='nav-wrapper-mobile'
                      onClick={() => setActive(5)}
                    >
                      <div
                        onClick={() => navigate('/services')}
                        className={`nav-text-mobile ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${active === 5 && 'active'}`}
                      >
                        Services <FaChevronDown className='icon' />
                      </div>
                      <div
                        className='dropdown-links-wrapper-mobile'
                        style={{
                          height: active === 5 ? `${homeContainerHeight}px` : 0,
                        }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/products')}>Books</li>
                          <li onClick={() => navigate('/products')}>Shirts</li>
                          <li onClick={() => navigate('/products')}>Frames</li>
                          <li onClick={() => navigate('/products')}>
                            Customization
                          </li>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
