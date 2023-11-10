import { Fragment, useState } from 'react';
import { NavbarRaw } from '../../components/navbarRaw/NavbarRaw';
import { Footer } from '../../components/footer/Footer';
import { FooterMobile } from '../../components/footerMobile/FooterMobile';

export const Aboutme = () => {
  const [currency, changeCurrency] = useState('usd');
  const [language, changeLanguage] = useState('en');

  const row = [1, 2, 3, 4, 5, 6, 7];

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <Fragment>
      <NavbarRaw language={language} />
      <div
        className='barber-profile-wrapper'
        style={{
          background: '#000',
          boxShadow: 'black 0px 305px 90px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '88%',
            margin: 'auto',
            paddingTop: '173px',
          }}
        >
          <div
            className='whyme'
            style={{
              fontSize: '65px',
              color: 'white',
              height: '550px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop: '20px',
              zIndex: 1,
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: 'Drum',
                fontSize: '115px',
                paddingBottom: '20px',
              }}
            >
              WHY ME?
            </p>
            <p style={{ margin: 0, fontFamily: 'Drum' }}>-BECAUSE,</p>
            <p style={{ margin: 0, fontFamily: 'Drum' }}>
              -MAMA SAID IM THЕ BEST,
            </p>
            <p style={{ margin: 0, fontFamily: 'Drum' }}>-BECAUSE.</p>
          </div>
          <div className='pfp' style={{ height: '600px' }}>
            <img
              src={require('../../assets/images/barberpfp.png')}
              height={600}
              width={550}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: '88%',
          margin: 'auto',
          opacity: '0.85',
          paddingTop: '130px',
          paddingBottom: '50px',
          boxShadow: 'black 0px -125px 90px',
        }}
      >
        <p
          style={{
            color: '#fff',
            fontSize: '29px',
            fontFamily: 'Bitter',
            fontWeight: '100',
          }}
        >
          Building a rapport with clients can be crucial. People often choose
          barbers they feel comfortable with and with whom they can have a
          friendly relationship. If you're personable and make your clients feel
          at ease, they may prefer you as their barber.
        </p>
      </div>

      <div className='portfolio' style={{ width: '88%', margin: 'auto' }}>
        <p style={{ color: '#fff', fontFamily: 'Drum', fontSize: '80px' }}>
          MY PORTFOLIO
        </p>
        <div
          className='photos_row1'
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: '90px',
            flexWrap: 'wrap',
          }}
        >
          {row.map((i: any) => (
            <img
              src={require(`../../assets/images/haircutpic${i}.png`)}
              style={{ marginBottom: '100px' }}
            />
          ))}
        </div>
      </div>

      <Footer
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
        bottomShadow={true}
      />
      <FooterMobile
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
      />
    </Fragment>
  );
};
