import React from 'react';
import posthog from 'posthog-js';
import acceptButtonBg from '../../assets/images/cookieButton1.png';
import declineButtonBg from '../../assets/images/cookieButton2.png';
import './CookiesNotificationStyle.css';

const CookiesNotification = ({ language, loggedIn }) => {
  const acceptCookies = () => {
    posthog.opt_in_capturing();
    posthog._start_queue_if_opted_in();
  };
  const declineCookies = () => {
    posthog.opt_out_capturing();
  };
  return (
    <div className="container">
      <div className="buttons">
        <button className="buttonTrigger" id="accept">
          <img className="bg" id="acceptBg" src={acceptButtonBg} alt="cookiesNotification" />
          <p className="text" id="acceptText" onClick={acceptCookies}>
            Accept
          </p>
        </button>
        <button className="buttonTrigger" id="decline">
          <img className="bg" id="declineBg" src={declineButtonBg} alt="cookiesNotification" />
          <p className="text" id="declineText" onClick={declineCookies}>
            Decline
          </p>
        </button>
      </div>
    </div>
  );
};

export default CookiesNotification;
