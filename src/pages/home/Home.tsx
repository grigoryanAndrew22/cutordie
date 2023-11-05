import { Fragment, useState } from 'react';
import { BlotSection } from '../../components/blot-section/blotSection';
import { BottomSection } from '../../components/bottom-section/BottomSection';
import { Footer } from '../../components/footer/Footer';
import { Offer } from '../../components/offer/Offer';
import { TopSection } from '../../components/top-section/TopSection';
import { NavbarRaw } from '../../components/navbarRaw/NavbarRaw';
import { OfferMobile } from '../../components/offerMobile/OfferMobile';
import dividerRight from '../../assets/images/dividerRight.svg';
import dividerLeft from '../../assets/images/dividerLeft.svg';
import { FooterMobile } from '../../components/footerMobile/FooterMobile';
import './Home.css';

export const Home = () => {
  const [currency, changeCurrency] = useState('usd');
  const [language, changeLanguage] = useState('en');

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <div className='home-wrapper'>
      <NavbarRaw language={language} />
      <TopSection language={language} />
      <BlotSection language={language} />
      <Offer
        flexDirection={'row'}
        language={language}
        currency={currency}
        index={1}
      />
      <Offer
        flexDirection={'row-reverse'}
        language={language}
        currency={currency}
        index={2}
      />
      <Offer
        flexDirection={'row'}
        language={language}
        currency={currency}
        index={3}
      />
      <OfferMobile
        divider={dividerLeft}
        language={language}
        currency={currency}
      />
      <OfferMobile
        divider={dividerRight}
        language={language}
        currency={currency}
      />
      <OfferMobile
        divider={dividerLeft}
        language={language}
        currency={currency}
      />
      <BottomSection language={language} />
      <Footer
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
        bottomShadow={false}
      />
      <FooterMobile
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
      />
    </div>
  );
};

// smallChange
