import skull_logo from '../../assets/images/skull_logo.svg';
import group from '../../assets/images/group.svg';
import hr from '../../assets/images/hr.svg';
import profileIcon from '../../assets/images/profileIcon.svg';
import libraryIcon from '../../assets/images/libraryIcon.svg';
import settingsIcon from '../../assets/images/settingsIcon.svg';
import logoutIcon from '../../assets/images/logoutIcon.svg';
import { Fragment, useState } from 'react';
import { navbarRawStyles } from './NavbarRaw.styles';
import './NavbarRaw.css';
import { SignInForm } from '../signin-form/SignInForm';
import { SignInFormMobile } from '../signin-formMobile/SignInFormMobile';
import { SignUpForm } from '../signupForm/SignUpForm';

const navbarRawLangs = {
  en: {
    aboutMe: 'ABOUT ME',
    courses: 'COURSES',
    signIn: 'SIGN IN',
    myprof: 'My profile',
    lib: 'Library',
    settings: 'Settings',
    logout: 'Log out',
  },
  ua: {
    aboutMe: 'ПРО МЕНЕ',
    courses: 'КУРСИ',
    signIn: 'УВІЙТИ',
    myprof: 'Профіль',
    lib: 'Бібліотека',
    settings: 'Параметри',
    logout: 'Вийти',
  },
};

export const NavbarRaw = (props: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formVisible, switchForm] = useState(false);
  const [dropdownActive, switchDropdown] = useState(false);

  const openForm = () => {
    switchForm(true);
  };

  const dropdownControl = () => {
    if (dropdownActive) {
      switchDropdown(false);
    } else {
      switchDropdown(true);
    }
  };

  const navbarRawLangGenerator = (lang: any) => {
    return lang === 'en' ? navbarRawLangs.en : navbarRawLangs.ua;
  };

  const navbarRawGenerated = navbarRawLangGenerator(props.language);

  return (
    <Fragment>
      <SignInForm
        visible={formVisible}
        switch={switchForm}
        language={props.language}
      />

      <div className='navbar-wrapper' style={navbarRawStyles.navbarWrapper}>
        <div className='navbar' style={navbarRawStyles.navbar}>
          <div className='skull' style={{ width: '30%', display: 'flex' }}>
            <a href='/cutordie' style={{ display: 'flex' }}>
              <img src={skull_logo} alt='logo' height={60} width={110} />
            </a>
          </div>
          <div
            className='title-logo'
            style={{ width: '40%', display: 'flex', justifyContent: 'center' }}
          >
            <a href='/cutordie' style={{ display: 'flex' }}>
              <img src={group} alt='logo' height={51} width={190} />
            </a>
          </div>
          <div className='tabs' style={navbarRawStyles.tabs}>
            <div style={{ padding: '0px 20px' }} className='aboutme-wrapper'>
              <a
                href='/cutordie/aboutme'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <p style={navbarRawStyles.aboutMe} className='aboutme'>
                  {navbarRawGenerated.aboutMe}
                </p>
              </a>
            </div>
            <div style={{ padding: '0px 20px' }} className='courses-wrapper'>
              <a
                href='/cutordie/courses'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <p
                  style={{ fontSize: '17px', letterSpacing: '0.02857em' }}
                  className='courses'
                >
                  {navbarRawGenerated.courses}
                </p>
              </a>
            </div>
            <div
              style={{ padding: '0px 20px' }}
              className='signin-navbar-wrapper'
            >
              <button
                onClick={loggedIn ? dropdownControl : openForm}
                // onClick={dropdownControl}
                style={navbarRawStyles.signinBTN}
                className='signin-btn'
              >
                {navbarRawGenerated.signIn}
              </button>
              <button
                onClick={loggedIn ? dropdownControl : openForm}
                className='account-btn'
                style={{
                  display: 'none',
                  border: 'none',
                  background: 'transparent',
                  color: 'inherit',
                  cursor: 'pointer',
                }}
              >
                <img src={profileIcon} alt='profile' width={27} />
              </button>
              <ul
                className='dropdown'
                style={navbarRawStyles.dropdown(dropdownActive)}
              >
                <li style={navbarRawStyles.li}>
                  <img src={profileIcon} alt='profile' width={25} />
                  <a href='#' style={navbarRawStyles.a}>
                    {navbarRawGenerated.myprof}
                  </a>
                </li>
                <li style={navbarRawStyles.li}>
                  <img src={libraryIcon} alt='profile' width={25} />
                  <a href='#' style={navbarRawStyles.a}>
                    {navbarRawGenerated.lib}
                  </a>
                </li>
                <li style={navbarRawStyles.li}>
                  <img src={settingsIcon} alt='profile' width={25} />
                  <a href='#' style={navbarRawStyles.a}>
                    {navbarRawGenerated.settings}
                  </a>
                </li>
                <img src={hr} />
                <li style={navbarRawStyles.li}>
                  <img
                    src={logoutIcon}
                    alt='profile'
                    width={25}
                    style={{ marginLeft: '-2px' }}
                  />
                  <a href='#' style={navbarRawStyles.a}>
                    {navbarRawGenerated.logout}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
