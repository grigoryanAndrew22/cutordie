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
            title: 'Modern Barbering Essentials',
            features: [
              'Timeless to trending styles covered',
              'Hands-on practice with diverse techniques',
              'Professional-grade precision skill development',
            ],
            buynow: 'Buy now',
          },
          ua: {
            title: 'Основи сучасної перукарської справи',
            features: [
              'Охоплено класичні та трендові стилі',
              'Практичні заняття з різноманітними техніками',
              'Розвиток навичок професійної точності',
            ],
            buynow: 'Купити',
          },
        }}
        offerCurrencies={{
          usd: ['20$', '40$'],
          uah: [`850`, `1000`],
          eur: ['20€', '40€'],
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
            title: 'Versatile Stylist Pro',
            features: [
              'Specialized texture-handling skills',
              'Artistic color-cut synergy technique',
              'Mastery of precise fading methods',
            ],
            buynow: 'Buy now',
          },
          ua: {
            title: 'Універсальний стиліст-професіонал',
            features: [
              'Робота з текстурою',
              'Синергія кольору та стрижки',
              'Майстерність точних методів градуювання',
            ],
            buynow: 'Купити',
          },
        }}
        offerCurrencies={{
          usd: ['30$', '60$'],
          uah: [`1099`, `2199`],
          eur: ['27€', '54€'],
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
            title: 'Artistic Hair Innovation Masterclass',
            features: [
              'Texture-specific cutting expertise',
              'Color-cut fusion for unique styles',
              'Cutting-edge sculptural hair design techniques',
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
        offerCurrencies={{
          usd: ['40$', '70$'],
          uah: [`1200`, `2400`],
          eur: ['40€', '70€'],
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
