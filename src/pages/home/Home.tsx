import { useState } from 'react';
import { BlotSection } from '../../components/blot-section/blotSection';
import { BottomSection } from '../../components/bottom-section/BottomSection';
import { Offer } from '../../components/offer/Offer';
import { TopSection } from '../../components/top-section/TopSection';
import { OfferMobile } from '../../components/offerMobile/OfferMobile';
import dividerRight from '../../assets/images/dividerRight.png';
import dividerLeft from '../../assets/images/dividerLeft.png';
import './Home.css';
import CookiesNotification from '../../components/cookies-notification/CookiesNotificationCookies';

export const Home = (props: any) => {
  let storageEmpty = true;
  if (localStorage.getItem('cookiesAllowed')) {
    storageEmpty = false;
  }
  const [showCookies, setShowCookies] = useState(storageEmpty);

  return (
    <div className='home-wrapper'>
      <TopSection language={props.language} />
      <BlotSection language={props.language} />
      <Offer
        flexDirection={'row'}
        language={props.language}
        currency={props.currency}
        index={1}
      />
      <Offer
        flexDirection={'row-reverse'}
        language={props.language}
        currency={props.currency}
        index={2}
      />
      <Offer
        flexDirection={'row'}
        language={props.language}
        currency={props.currency}
        index={3}
      />
      <OfferMobile
        divider={dividerLeft}
        language={props.language}
        currency={props.currency}
      />
      <OfferMobile
        divider={dividerRight}
        language={props.language}
        currency={props.currency}
      />
      <OfferMobile
        divider={dividerLeft}
        language={props.language}
        currency={props.currency}
      />
      <BottomSection language={props.language} />
      {showCookies && (
        <CookiesNotification
          language={props.language}
          setShowCookies={setShowCookies}
        />
      )}
    </div>
  );
};

// smallChange
