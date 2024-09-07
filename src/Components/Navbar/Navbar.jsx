import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/tmb logo.png';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { useIcons } from '../../hooks/useIcon';
import OutsideClickHandler from 'react-outside-click-handler';
import Lan from '../Lan/Lan';
import PopUpItems from '../Pop-up/PopUpItem';
import SignUpFor from '../SignUpForm/SignUpFor';
import SignUpFormDropdown from '../SignUpFormDropdown/SignUpFormDropdown';
import VoulnteerDropdown from '../VoulnteerDropdown/VoulnteerDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSignInFormDropdown } from '../../Features/sign-in/sign-in_slice';
import SignInFormDropdown from '../SignInFormDropdown/SignInFormDropdown';

const Navbar = () => {
  const { showSignInFormDropdown } = useSelector((state) => state.signIn);
  console.log('showSignInFormDropdown', showSignInFormDropdown);

  const dispatch = useDispatch();

  const { nigeria, china, uk } = useIcons();
  const [active, setActive] = useState(0);
  const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  const [showAmNewHereDropdown1, setShowAmNewHereDropdown1] = useState(false);
  const [showAmNewHereDropdown2, setShowAmNewHereDropdown2] = useState(false);
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
  }, []);
  console.log('showAmNewHereDropdown1', showAmNewHereDropdown1);
  console.log('showAmNewHereDropdown2', showAmNewHereDropdown2);

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
                              <li
                                onClick={() =>
                                  navigate('/home/why-moving-bible')
                                }
                              >
                                Why Moving Bible
                              </li>
                              <li onClick={() => navigate('/home/vision')}>
                                Vision
                              </li>
                              <li onClick={() => navigate('/home/mission')}>
                                Mission
                              </li>
                              <li onClick={() => navigate('/home/identity')}>
                                Identity
                              </li>
                              <li onClick={() => navigate('/home/values')}>
                                Values
                              </li>
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
                        onClick={() => navigate('/about-us')}
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
                              <li
                                onClick={() =>
                                  navigate('/about-us/our-mission')
                                }
                              >
                                Our Mission
                              </li>
                              <li
                                onClick={() => navigate('/about-us/our-vision')}
                              >
                                Our Vision
                              </li>
                              <li
                                onClick={() => navigate('/about-us/our-values')}
                              >
                                Our Values
                              </li>
                              <li onClick={() => navigate('/about-us/history')}>
                                History
                              </li>
                              <li
                                onClick={() => navigate('/about-us/our-team')}
                              >
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
                              <li onClick={() => navigate('/media/podcast')}>
                                Podcast
                              </li>
                              <li onClick={() => navigate('/media/videos')}>
                                Videos
                              </li>
                              <li onClick={() => navigate('/media/reels')}>
                                Reels
                              </li>
                              <li
                                onClick={() => navigate('/media/presentation')}
                              >
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
                              <li onClick={() => navigate('/products/books')}>
                                Books
                              </li>
                              <li onClick={() => navigate('/products/shirts')}>
                                Shirts
                              </li>
                              <li onClick={() => navigate('/products/frames')}>
                                Frames
                              </li>
                              <li
                                onClick={() =>
                                  navigate('/products/customization')
                                }
                              >
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
                              <li
                                onClick={() => navigate('/services/volunteer')}
                              >
                                Volunteer
                              </li>
                              <li onClick={() => navigate('/services/onsite')}>
                                Onsite
                              </li>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li
                      className='nav-wrapper'
                      onMouseOver={() => setActive(6)}
                      onMouseLeave={() => setActive(0)}
                    >
                      <div
                        onClick={() => navigate('/donate')}
                        className={`nav-text ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${
                          (location.pathname.includes('/donate') ||
                            active === 6) &&
                          'active'
                        }`}
                      >
                        Donate
                        <FaChevronDown className='icon' />
                      </div>
                      {active === 6 && (
                        <div className='dropdown-links-wrapper'>
                          <div className='dropdown-links-con'>
                            <div className='dropdown-links'>
                              <li
                                onClick={() => navigate('/donate/donate-now')}
                              >
                                Donate
                              </li>
                              <li
                                onClick={() => navigate('/donate/why-donate')}
                              >
                                Why donate
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
                    <div
                      className='lang'
                      onMouseEnter={() => setShowCountriesDropdown(true)}
                      onMouseLeave={() => setShowCountriesDropdown(false)}
                    >
                      <div className='en'>
                        <p>En</p>
                      </div>
                      <div className='icon'>
                        <FaChevronDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hamburger ${location.pathname !== '/' && 'other'}`}
                onClick={() => {
                  setShowNavMainMobileContainer(!showNavMainMobileContainer);
                  setActive(0);
                }}
              >
                <FaBars />
              </div>
            </div>
            <div className={`nav-btn-wrapper`}>
              <button
                className={`nav-btn ${
                  location.pathname !== '/' && 'nav-btn-other'
                }`}
                onClick={() => setShowAmNewHereDropdown1(true)}
              >
                Am New Here
              </button>
            </div>
          </div>
          <div
            className='countries-dropdown-wrapper'
            onMouseEnter={() => setShowCountriesDropdown(true)}
            onMouseLeave={() => setShowCountriesDropdown(false)}
          >
            {showCountriesDropdown && (
              <div className='countries-dropdown'>
                <Lan />
              </div>
            )}
          </div>
          {/* {showAmNewHereDropdown1 && (
            <>
              <OutsideClickHandler
                onOutsideClick={(e) => setShowAmNewHereDropdown1(false)}
              >
                <div className='countries-dropdown'>
                  <PopUpItems
                    setShowAmNewHereDropdown1={setShowAmNewHereDropdown1}
                    setShowAmNewHereDropdown2={setShowAmNewHereDropdown2}
                  />
                </div>
              </OutsideClickHandler>
            </>
          )} */}
          {showAmNewHereDropdown1 && (
            <>
              <OutsideClickHandler
                onOutsideClick={(e) => setShowAmNewHereDropdown1(false)}
              >
                <VoulnteerDropdown
                  setShowAmNewHereDropdown1={setShowAmNewHereDropdown1}
                  setShowAmNewHereDropdown2={setShowAmNewHereDropdown2}
                />
              </OutsideClickHandler>
            </>
          )}
          {showAmNewHereDropdown2 && (
            <>
              <OutsideClickHandler
                onOutsideClick={(e) => setShowAmNewHereDropdown2(false)}
              >
                <SignUpFormDropdown
                  setShowAmNewHereDropdown2={setShowAmNewHereDropdown2}
                />
              </OutsideClickHandler>
            </>
          )}
          {showSignInFormDropdown && (
            <>
              <OutsideClickHandler
                onOutsideClick={() =>
                  dispatch(setShowSignInFormDropdown(false))
                }
              >
                <SignInFormDropdown
                  setShowAmNewHereDropdown2={setShowAmNewHereDropdown2}
                />
              </OutsideClickHandler>
            </>
          )}
          <OutsideClickHandler
            onOutsideClick={(e) => {
              if (!e.target.closest('.navbar-component')) {
                setShowNavMainMobileContainer(false);
              }
            }}
          >
            <div className='mobile-view-con'>
              <div className='mobile-view-wrapper'>
                <div
                  className='mobile-view'
                  style={{
                    height: showNavMainMobileContainer
                      ? `${navMainMobileContainerHeight + 125}px`
                      : 0,
                  }}
                >
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
                        className={`dropdown-links-wrapper-mobile ${
                          active === 1 && 'active'
                        }`}
                        // style={{
                        //   height: active === 1 ? `${homeContainerHeight}px` : 0,
                        // }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li
                            onClick={() => {
                              navigate('/home/why-moving-bible');
                              setShowNavMainMobileContainer(false);
                            }}
                          >
                            Why Moving Bible
                          </li>
                          <li
                            onClick={() => {
                              navigate('/home/vision');
                              setShowNavMainMobileContainer(false);
                            }}
                          >
                            Vision
                          </li>
                          <li
                            onClick={() => {
                              navigate('/home/mission');
                              setShowNavMainMobileContainer(false);
                            }}
                          >
                            Mission
                          </li>
                          <li
                            onClick={() => {
                              navigate('/home/identity');
                              setShowNavMainMobileContainer(false);
                            }}
                          >
                            identity
                          </li>
                          <li
                            onClick={() => {
                              navigate('/home/values');
                              setShowNavMainMobileContainer(false);
                            }}
                          >
                            Values
                          </li>
                        </div>
                      </div>
                    </li>
                    <li
                      className='nav-wrapper-mobile'
                      onClick={() => setActive(2)}
                    >
                      <div
                        onClick={() => navigate('/about-us')}
                        className={`nav-text-mobile ${
                          location.pathname !== '/' && 'nav-text-other'
                        } ${active === 2 && 'active'}`}
                      >
                        About us <FaChevronDown className='icon' />
                      </div>
                      <div
                        className={`dropdown-links-wrapper-mobile ${
                          active === 2 && 'active'
                        }`}
                        // style={{
                        //   height: active === 2 ? `${homeContainerHeight}px` : 0,
                        // }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/about-us/our-mission')}>
                            Our Mission
                          </li>
                          <li onClick={() => navigate('/about-us/our-vision')}>
                            Our Vision
                          </li>
                          <li onClick={() => navigate('/about-us/our-values')}>
                            Our Values
                          </li>
                          <li onClick={() => navigate('/about-us/history')}>
                            History
                          </li>
                          <li onClick={() => navigate('/about-us/our-team')}>
                            Our team
                          </li>
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
                        className={`dropdown-links-wrapper-mobile ${
                          active === 3 && 'active'
                        }`}
                        // style={{
                        //   height: active === 3 ? `${homeContainerHeight}px` : 0,
                        // }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/media/podcast')}>
                            Podcast
                          </li>
                          <li onClick={() => navigate('/media/videos')}>
                            Videos
                          </li>
                          <li onClick={() => navigate('/media/reels')}>
                            Reels
                          </li>
                          <li onClick={() => navigate('/media/presentation')}>
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
                        className={`dropdown-links-wrapper-mobile ${
                          active === 4 && 'active'
                        }`}
                        // style={{
                        //   height: active === 4 ? `${homeContainerHeight}px` : 0,
                        // }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/products/books')}>
                            Books
                          </li>
                          <li onClick={() => navigate('/products/shirts')}>
                            Shirts
                          </li>
                          <li onClick={() => navigate('/products/frames')}>
                            Frames
                          </li>
                          <li
                            onClick={() => navigate('/products/customization')}
                          >
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
                        className={`dropdown-links-wrapper-mobile ${
                          active === 5 && 'active'
                        }`}
                        // style={{
                        //   height: active === 5 ? `${homeContainerHeight}px` : 0,
                        // }}
                      >
                        <div
                          ref={homeContainer}
                          className='dropdown-linkss dropdown-links-mobile'
                        >
                          <li onClick={() => navigate('/services/volunteer')}>
                            Volunteer
                          </li>
                          <li onClick={() => navigate('/services/onsite')}>
                            Onsite
                          </li>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
