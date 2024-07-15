import { useState } from 'react';
import { BlotSection } from '../../components/blot-section/blotSection';
import { BottomSection } from '../../components/bottom-section/BottomSection';
import { Offer } from '../../components/offer/Offer';
import { TopSection } from '../../components/top-section/TopSection';
import dividerRight from '../../assets/images/dividerRight.png';
import dividerLeft from '../../assets/images/dividerLeft.png';
import './Home.css';
// import CookiesNotification from '../../components/cookies-notification/CookiesNotificationCookies';

export const Home = (props: any) => {
  let storageEmpty = true;
  if (localStorage.getItem('cookiesAllowed')) {
    storageEmpty = false;
  }
  const [showCookies, setShowCookies] = useState(storageEmpty);

  return (
    <div className="home-wrapper">
      <TopSection language={props.language} />
      <BlotSection language={props.language} />
      <Offer
        flexDirection={'row'}
        language={props.language}
        currency={props.currency}
        index={1}
        divider={dividerLeft}
        covers={['1.png', '2.png', '3.png']}
        courseIds={[1, 2, 3]}
        offerTextLangs={{
          en: {
            title: '"All in" pack',
            features: [
              'basic haircutting course',
              'precision cuts',
              'creative haircutting workshop',
            ],
            buynow: 'Buy now',
          },
          ua: {
            title: 'ВСЕ В ОДНОМУ',
            features: [
              'курс по стрижці для початківців',
              'акуратні стрижки',
              'майстерня креативних стрижок',
            ],
            buynow: 'Купити',
          },
        }}
      />
      <Offer
        flexDirection={'row-reverse'}
        language={props.language}
        currency={props.currency}
        index={2}
        divider={dividerRight}
        covers={['4.png', '5.png', '6.png']}
        courseIds={[4, 5, 6]}
        offerTextLangs={{
          en: {
            title: '"All in" pack',
            features: [
              'basic haircutting course',
              'precision cuts',
              'creative haircutting workshop',
            ],
            buynow: 'Buy now',
          },
          ua: {
            title: 'ВСЕ В ОДНОМУ',
            features: [
              'курс по стрижці для початківців',
              'акуратні стрижки',
              'майстерня креативних стрижок',
            ],
            buynow: 'Купити',
          },
        }}
      />
      <Offer
        flexDirection={'row'}
        language={props.language}
        currency={props.currency}
        index={3}
        divider={dividerLeft}
        covers={['7.png', '8.png', '9.png']}
        courseIds={[7, 8, 9]}
        offerTextLangs={{
          en: {
            title: '"All in" pack',
            features: [
              'basic haircutting course',
              'precision cuts',
              'creative haircutting workshop',
            ],
            buynow: 'Buy now',
          },
          ua: {
            title: 'ВСЕ В ОДНОМУ',
            features: [
              'курс по стрижці для початківців',
              'акуратні стрижки',
              'майстерня креативних стрижок',
            ],
            buynow: 'Купити',
          },
        }}
      />
      {/* <OfferMobile
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
      /> */}
      <BottomSection language={props.language} />
      {/* {showCookies && (
        <CookiesNotification language={props.language} setShowCookies={setShowCookies} />
      )} */}
    </div>
  );
};

// smallChange
