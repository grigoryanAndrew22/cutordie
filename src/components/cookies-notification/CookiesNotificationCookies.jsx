import React, { useState } from 'react';
import acceptButtonBg from '../../assets/images/cookieButton1.png';
import declineButtonBg from '../../assets/images/cookieButton2.png';
import './CookiesNotificationStyle.css';
const CookiesNotification = ({ language, setShowCookies }) => {
  const acceptCookies = () => {
    localStorage.setItem('cookiesAllowed', true);
    setShowCookies(false);
  };
  const declineCookies = () => {
    localStorage.setItem('cookiesAllowed', false);
    setShowCookies(false);
  };
  return (
    <div className="container">
      <div className="buttons">
        <button className="buttonTrigger" id="accept" onClick={acceptCookies}>
          <img className="bg" id="acceptBg" src={acceptButtonBg} alt="cookiesNotification" />
          <p className="text" id="acceptText">
            Accept
          </p>
        </button>
        <button className="buttonTrigger" id="decline" onClick={declineCookies}>
          <img className="bg" id="declineBg" src={declineButtonBg} alt="cookiesNotification" />
          <p className="text" id="declineText">
            Decline
          </p>
        </button>
      </div>
    </div>
  );
};

export default CookiesNotification;
