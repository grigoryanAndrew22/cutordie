import { Fragment, useState } from 'react';
import { NavbarRaw } from '../../components/navbarRaw/NavbarRaw';
import { Footer } from '../../components/footer/Footer';
import { FooterMobile } from '../../components/footerMobile/FooterMobile';
import pencil from '../../assets/images/pencil.svg';
import coinGray from '../../assets/images/coinGray.svg';
import hryvniaGray from '../../assets/images/hryvniaGray.svg';
import euroGray from '../../assets/images/euroGray.svg';
import dollarGray from '../../assets/images/dollarGray.svg';
import langIconGray from '../../assets/images/langIconGray.svg';
import logoutGray from '../../assets/images/logoutGray.svg';
import './Profile.css';

export const Profile = () => {
  const [currency, changeCurrency] = useState('usd');
  const [language, changeLanguage] = useState('en');

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <Fragment>
      <NavbarRaw language={language} />
      <div className='prof-sett-wrapper' style={{ height: '600px' }}>
        <div
          style={{
            paddingTop: '150px',
            display: 'flex',
            width: '88%',
            margin: 'auto',
            justifyContent: 'space-between',
          }}
        >
          <div className='myprofile' style={{ width: '36%' }}>
            <p
              className='prof-title'
              style={{
                margin: 0,
                color: '#444444',
                fontSize: '83px',
                fontFamily: 'Drum',
              }}
            >
              MY PROFILE
            </p>
            <div className='prof-info'>
              <div
                className='name_surname'
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div className='name'>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingBottom: '7px',
                    }}
                  >
                    <img src={pencil} width={29} height={33} />
                    <label
                      htmlFor='name'
                      style={{
                        fontFamily: 'Bitter',
                        fontSize: '25px',
                        paddingLeft: '5px',
                      }}
                    >
                      Name:
                    </label>
                  </div>
                  <input
                    value={'Vasya'}
                    type='text'
                    className='name-input'
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      height: '35px',
                      fontFamily: 'Bitter',
                      color: '#444444',
                      fontSize: '20px',
                      fontWeight: '600',
                    }}
                  />
                </div>
                <div className='surname'>
                  <div>
                    <img src={pencil} width={27} height={55} />
                    <label
                      htmlFor='surname'
                      style={{
                        fontFamily: 'Bitter',
                        fontSize: '22px',
                        paddingBottom: '9px',
                      }}
                    >
                      Surname:
                    </label>
                  </div>
                  <input
                    value='Vasin'
                    type='text'
                    className='surname-input'
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      height: '35px',
                      fontFamily: 'Bitter',
                      color: '#444444',
                      fontSize: '20px',
                      fontWeight: '600',
                    }}
                  />
                </div>
              </div>
              <div className='email_password'></div>
            </div>
          </div>
          <div className='settings'>
            <p className='sett-title' style={{ margin: 0 }}>
              SETTINGS
            </p>
            <div className='currency-section'>
              <img src={coinGray} />
              <div>
                <button
                  // onClick={changeCurrencyUAH}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                  }}
                >
                  <img width={32} src={hryvniaGray} />
                </button>
                <button
                  // onClick={changeCurrencyEUR}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                  }}
                >
                  <img width={44} src={euroGray} />
                </button>
                <button
                  // onClick={changeCurrencyUSD}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                  }}
                >
                  <img width={32} src={dollarGray} />
                </button>
              </div>
            </div>
            <div className='language-section'>
              <img src={langIconGray} />
              <button
                // onClick={() => {
                //   props.changeLangHandler("ua");
                // }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '42px',
                  color: '#505050',
                }}
              >
                UA
              </button>
              <button
                // onClick={() => {
                //   props.changeLangHandler("en");
                // }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '42px',
                  color: '#505050',
                }}
              >
                EN
              </button>
            </div>
            <div className='logout-section'>
              <img src={logoutGray} />
              <button
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: '#505050',
                  cursor: 'pointer',
                }}
              >
                Log out
              </button>
            </div>
          </div>
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
