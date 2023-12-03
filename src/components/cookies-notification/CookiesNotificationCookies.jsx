import React from 'react';
import posthog from 'posthog-js';
import acceptButtonBg from '../../assets/images/cookieButton1.png';
import declineButtonBg from '../../assets/images/cookieButton2.png';
import './CookiesNotificationStyle.css';
import CookieConsent from 'react-cookie-consent';

const CookiesNotification = ({ language }) => {
  const acceptCookies = () => {
    //allow
  };
  const declineCookies = () => {
    //decline
  };
  return (
    <CookieConsent onAccept={acceptCookies} onDecline={declineCookies}>
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
    </CookieConsent>
  );
};

export default CookiesNotification;
