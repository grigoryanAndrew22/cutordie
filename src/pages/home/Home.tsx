import { useState } from 'react';
import { BlotSection } from '../../components/blot-section/blotSection';
import { BottomSection } from '../../components/bottom-section/BottomSection';
import { Footer } from '../../components/footer/Footer';
import { NavBar } from '../../components/navbar/Navbar';
import { Offer } from '../../components/offer/Offer';
import { TopSection } from '../../components/top-section/TopSection';
import { NavbarRaw } from '../../components/navbarRaw/NavbarRaw';

export const Home = () => {
  const [language, changeLanguage] = useState('en');

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <div className='wrapper'>
      <NavbarRaw language={language} />
      <TopSection language={language} />
      <BlotSection language={language} />
      <Offer flexDirection={'row'} language={language} />
      <Offer flexDirection={'row-reverse'} language={language} />
      <Offer flexDirection={'row'} language={language} />
      <BottomSection language={language} />
      <Footer changeLangHandler={changeLang} language={language} />
    </div>
  );
};

// smallChange
