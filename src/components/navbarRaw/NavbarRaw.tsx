import skull_logo from '../../assets/images/skull_logo.svg';
import group from '../../assets/images/group.svg';
import hr from '../../assets/images/hr.svg';
import profileIcon from '../../assets/images/profileIcon.svg';
import libraryIcon from '../../assets/images/libraryIcon.svg';
import settingsIcon from '../../assets/images/settingsIcon.svg';
import logoutIcon from '../../assets/images/logoutIcon.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { navbarRawStyles } from './NavbarRaw.styles';
import './NavbarRaw.css';

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
  const [dropdownActive, switchDropdown] = useState(false);

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
    <div className='navbar-wrapper' style={navbarRawStyles.navbarWrapper}>
      <div className='navbar' style={navbarRawStyles.navbar}>
        <div className='skull' style={{ width: '30%', display: 'flex' }}>
          <a href='#' style={{ display: 'flex' }}>
            <img src={skull_logo} alt='logo' height={60} width={110} />
          </a>
        </div>
        <div
          className='title-logo'
          style={{ width: '40%', display: 'flex', justifyContent: 'center' }}
        >
          <a href='#' style={{ display: 'flex' }}>
            <img src={group} alt='logo' height={51} width={190} />
          </a>
        </div>
        <div className='tabs' style={navbarRawStyles.tabs}>
          <div style={{ padding: '0px 20px' }}>
            <p style={navbarRawStyles.aboutMe}>{navbarRawGenerated.aboutMe}</p>
          </div>
          <div style={{ padding: '0px 20px' }}>
            <p style={{ fontSize: '17px', letterSpacing: '0.02857em' }}>
              {navbarRawGenerated.courses}
            </p>
          </div>
          <div style={{ position: 'relative', padding: '0px 20px' }}>
            <button
              onClick={dropdownControl}
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
            <button
              onClick={dropdownControl}
              style={navbarRawStyles.signinBTN}
              className='signin-btn'
            >
              {navbarRawGenerated.signIn}
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
                <img src={logoutIcon} alt='profile' width={25} />
                <a href='#' style={navbarRawStyles.a}>
                  {navbarRawGenerated.logout}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
