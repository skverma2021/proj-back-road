import React from 'react';
import logo from '../images/logo.svg';
import { pageLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div class='nav-header'>
          <img src={logo} class='nav-logo' alt='backroads' />
          <button type='button' class='nav-toggle' id='nav-toggle'>
            <i class='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((t) => {
            return (
              <li id={t.id}>
                <a href={t.href} className='nav-link'>
                  {t.text}
                </a>
              </li>
            );
          })}
          {/* <li>
            <a href='#home' className='nav-link'>
              {' '}
              home{' '}
            </a>
          </li>

          <li>
            <a href='#about' className='nav-link'>
              {' '}
              about{' '}
            </a>
          </li>

          <li>
            <a href='#services' className='nav-link'>
              {' '}
              services{' '}
            </a>
          </li>

          <li>
            <a href='#tours' className='nav-link'>
              {' '}
              tours
            </a>
          </li> */}
        </ul>

        <ul className='nav-icons'>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              className='nav-icon'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              className='nav-icon'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              className='nav-icon'
            >
              <i className='fab fa-squarespace'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
