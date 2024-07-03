
import '../../../Pages/About/AboutUs.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../Components/Navbar/Navbar.css';
import { NavLinks } from '../../../Components/Navbar/Navlinks';
import logo from '../../../Assets/logo.png';
import uk from '../../../Assets/Cana.png';
import italy from '../../../Assets/italy.png';
import nigeria from '../../../Assets/nigeria.png';
import { FaChevronDown } from 'react-icons/fa';

const MediaHero = () => {
  const [active, setActive] = useState(0);
  const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  return (
    <>
      <div className='navbar-component'>
        <div className='container'>
          <div className='navbar-items-wrapper'>
            <Link to='/'>
              <img src={logo} alt='' className='logo abt-logo' />
            </Link>

            <ul className='nav-main abt-main'>
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
                      <Link to={item.link}>{item.title}</Link>
                    </div>
                    {active === item.id && (
                      <div
                        className='dropdown About'
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
            <div className='country-wrapper'>
              <div className='country'>
                <img src={uk} alt='' className='uk' />
                <img src={italy} alt='' className='italy' />
                <img src={nigeria} alt='' className='nigeria' />
              </div>
              <div className='en abt-en'>
                <p>En</p>
              </div>
              <div className='icon'>
                <FaChevronDown
                  onMouseEnter={() => setShowCountriesDropdown(true)}
                  onMouseLeave={() => setShowCountriesDropdown(false)}
                  className='Fa'
                />
              </div>
            </div>
            <div className='nav-btn'>
              <button className='btn-nav abt-btn'>Am New Here</button>
            </div>
          </div>
          <div className='countries-dropdown-wrapper'>
            {showCountriesDropdown && (
              <div className='countries-dropdown'>hello</div>
            )}
          </div>
        </div>
      </div>
      <section className='why-section'>
        <div className='why-content'>
          {/* <h2>Why The Moving Bible?</h2> */}
          <p>
            In a world filled with words, The Moving Bible exists to ignite
            action. We believe that faith in Jesus Christ shouldn't be
            confined to dusty pages or Sunday sermons. It's a vibrant force
            meant to transform hearts and inspire positive change in the world
            around us.
          </p>
        </div>
      </section>
    </>
    
  )
}

export default MediaHero