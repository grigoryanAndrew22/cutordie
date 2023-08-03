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

export const Home = () => {
  const [currency, changeCurrency] = useState('usd');
  const [language, changeLanguage] = useState('en');

  const changeCurr = (currency: any) => {
    changeCurrency(currency);
  };

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <Fragment>
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
      <OfferMobile divider={dividerLeft} language={language} />
      <OfferMobile divider={dividerRight} language={language} />
      <OfferMobile divider={dividerLeft} language={language} />
      <BottomSection language={language} />
      <Footer
        changeLangHandler={changeLang}
        changeCurrencyHandler={changeCurr}
        language={language}
      />
      <FooterMobile language={language} changeLangHandler={changeLang} />
    </Fragment>
  );
};

// smallChange
