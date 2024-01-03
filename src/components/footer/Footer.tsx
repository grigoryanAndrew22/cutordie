import { FooterStyles } from './Footer.styles';
import vertical from '../../assets/images/vertical.svg';
import langIcon from '../../assets/images/langIcon.png';
import coin from '../../assets/images/coin.png';
import hryvniaWhite from '../../assets/images/hryvniaWhite.png';
import euroWhite from '../../assets/images/euroWhite.png';
import dollarWhite from '../../assets/images/dollarWhite.png';
import hryvniaGray from '../../assets/images/hryvniaGray.png';
import euroGray from '../../assets/images/euroGray.png';
import dollarGray from '../../assets/images/dollarGray.png';
import './Footer.css';
import './FooterMobile.css';
import instaIcon from '../../assets/images/instaIcon.png';
import tiktokIcon from '../../assets/images/tiktokIcon.png';
import { Fragment } from 'react';
import { FooterMobileStyles } from './FooterMobile.styles';
import LanguageIcon from '@mui/icons-material/Language';

const footerLangs = {
  //TEST//bred
  en: {
    contacts: 'Contacts',
    about: 'About me',
    termsofUse: 'Terms of Use',
    refund: 'Refund policy',
    privacy: 'Privacy policy',
  },
  ua: {
    contacts: 'Контакти',
    about: 'Про мене',
    termsofUse: 'Умови користування',
    refund: 'Політика повернень',
    privacy: 'Політика конфідеційності',
  },
};

export const Footer = (props: any) => {
  const changeCurrencyUAH = () => {
    props.changeCurr('uah');
  };
  const changeCurrencyUSD = () => {
    props.changeCurr('usd');
  };
  const changeCurrencyEUR = () => {
    props.changeCurr('eur');
  };

  const footerTranslated =
    props.language === 'en' ? footerLangs.en : footerLangs.ua;

  return (
    <Fragment>
      <div
        className='footer-section'
        style={FooterStyles.wrapper(props.bottomShadow)}
      >
        <div style={FooterStyles.footerSection}>
          <div className='logo_par' style={FooterStyles.logoPart}>
            <img
              src={require('../../assets/images/footerLogo.png')}
              alt='logo'
              width={344}
              height={254}
            />
            <p style={FooterStyles.copyright}>
              &copy; 2023 Cut or die. All rights reserved.
            </p>
          </div>
          <div className='info_part' style={{ width: '75%' }}>
            <ul style={FooterStyles.footerInfo}>
              <li className='contacts' style={FooterStyles.infoItem}>
                <p style={{ margin: 0 }}>{footerTranslated.contacts}</p>
                <p style={{ margin: 0 }}>{footerTranslated.about}</p>
                <p style={{ margin: 0 }}>FAQ</p>
              </li>
              <img src={vertical} alt='line' height={220} />
              <li className='policy' style={FooterStyles.infoItem}>
                <p style={{ margin: 0 }}>
                  <a
                    href='/policy'
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {footerTranslated.termsofUse}
                  </a>
                </p>
                <p style={{ margin: 0 }}>
                  <a
                    href='/policy'
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {footerTranslated.refund}
                  </a>
                </p>
                <p style={{ margin: 0 }}>
                  <a
                    href='/policy'
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {footerTranslated.privacy}
                  </a>
                </p>
              </li>
              <img src={vertical} alt='line' height={220} />
              <li
                className='social_networks'
                style={FooterStyles.socialNetworks}
              >
                <img
                  alt=''
                  src={instaIcon}
                  style={{ alignSelf: 'center', width: '76px' }}
                />
                <img
                  alt=''
                  src={tiktokIcon}
                  style={{ alignSelf: 'center', width: '69px' }}
                />
              </li>
              <img src={vertical} alt='line' height={220} />
              <li className='currency_language'>
                <div style={FooterStyles.currency}>
                  <img
                    src={coin}
                    alt='coin'
                    width={54}
                    height={38}
                    style={{}}
                  />
                  <div
                    style={{
                      display: 'flex',
                      gap: '30px',
                    }}
                  >
                    <button
                      onClick={changeCurrencyUAH}
                      style={{
                        border: 'none',
                        color: props.currency === 'uah' ? 'white' : '#808080',
                        background: 'transparent',
                        cursor: 'pointer',
                        fontSize: '30px',
                      }}
                    >
                      <img
                        alt=''
                        width={32}
                        src={
                          props.currency === 'uah' ? hryvniaWhite : hryvniaGray
                        }
                      />
                    </button>
                    <button
                      onClick={changeCurrencyEUR}
                      style={{
                        border: 'none',
                        color: props.currency === 'eur' ? 'white' : '#808080',
                        background: 'transparent',
                        cursor: 'pointer',
                        fontSize: '30px',
                      }}
                    >
                      <img
                        alt=''
                        width={44}
                        src={props.currency === 'eur' ? euroWhite : euroGray}
                      />
                    </button>
                    <button
                      onClick={changeCurrencyUSD}
                      style={{
                        border: 'none',
                        color: props.currency === 'usd' ? 'white' : '#808080',
                        background: 'transparent',
                        cursor: 'pointer',
                        fontSize: '30px',
                      }}
                    >
                      <img
                        alt=''
                        width={32}
                        src={
                          props.currency === 'usd' ? dollarWhite : dollarGray
                        }
                      />
                    </button>
                  </div>
                </div>
                <div style={FooterStyles.language}>
                  <img alt='' src={langIcon} width={54} style={{}} />
                  <div
                    style={{
                      display: 'flex',
                      gap: '30px',
                    }}
                  >
                    <button
                      onClick={() => {
                        props.changeLangHandler('ua');
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        fontSize: '42px',
                        color: props.language === 'ua' ? 'white' : '#808080',
                      }}
                    >
                      UA
                    </button>
                    <button
                      onClick={() => {
                        props.changeLangHandler('en');
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        fontSize: '42px',
                        color: props.language === 'en' ? 'white' : '#808080',
                      }}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* FOOTER MOBILE */}
      <div className='footer-section-mobile' style={FooterMobileStyles.wrapper}>
        <div style={FooterMobileStyles.footerSection}>
          <div className='logo_part' style={FooterMobileStyles.logoPart}>
            <div style={{ width: '50%' }}>
              <img
                src={require('../../assets/images/footerLogo.png')}
                alt='logo'
                width={240}
                height={183}
                style={{ marginLeft: '-7px' }}
              />
            </div>
            <div className='currency_language' style={{ marginTop: '45px' }}>
              <div style={FooterMobileStyles.currency}>
                <img src={coin} alt='coin' width={35} />
                <button
                  onClick={changeCurrencyUAH}
                  style={{
                    border: 'none',
                    color: props.currency === 'uah' ? 'white' : '#808080',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                    marginLeft: '7px',
                    padding: '0px 5px',
                  }}
                >
                  <img
                    alt=''
                    width={15}
                    src={props.currency === 'uah' ? hryvniaWhite : hryvniaGray}
                  />
                </button>
                <button
                  onClick={changeCurrencyEUR}
                  style={{
                    border: 'none',
                    color: props.currency === 'eur' ? 'white' : '#808080',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                    padding: '0px 5px',
                  }}
                >
                  <img
                    alt=''
                    width={21}
                    src={props.currency === 'eur' ? euroWhite : euroGray}
                  />
                </button>
                <button
                  onClick={changeCurrencyUSD}
                  style={{
                    border: 'none',
                    color: props.currency === 'usd' ? 'white' : '#808080',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                    marginTop: '4px',
                    padding: '0px 5px',
                  }}
                >
                  <img
                    alt=''
                    width={15}
                    src={props.currency === 'usd' ? dollarWhite : dollarGray}
                  />
                </button>
              </div>
              <div style={FooterMobileStyles.language}>
                <LanguageIcon
                  sx={{
                    fontSize: '37px',
                    color: '#808080',
                    marginLeft: '-1.75px',
                    marginRight: '5px',
                  }}
                />
                <button
                  onClick={() => {
                    props.changeLangHandler('ua');
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '23px',
                    color: props.language === 'ua' ? 'white' : '#808080',
                    paddingLeft: '4px',
                    paddingRight: '5px',
                  }}
                >
                  UA
                </button>
                <button
                  onClick={() => {
                    props.changeLangHandler('en');
                  }}
                  style={{
                    marginBlockStart: '1em',
                    marginBlockEnd: '1em',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '23px',
                    color: props.language === 'en' ? 'white' : '#808080',
                    paddingLeft: '5px',
                  }}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
          <div className='info_part' style={{ width: '100%' }}>
            <ul style={FooterMobileStyles.footerInfo}>
              <li className='contacts' style={FooterMobileStyles.infoItem}>
                <p style={{ margin: 0 }}>{footerTranslated.contacts}</p>
                <p style={{ margin: 0 }}>{footerTranslated.about}</p>
                <p style={{ margin: 0 }}>FAQ</p>
              </li>
              <img src={vertical} alt='line' height={120} />
              <li className='policy' style={FooterMobileStyles.infoItem}>
                <p style={{ margin: 0 }}>{footerTranslated.termsofUse}</p>
                <p style={{ margin: 0 }}>{footerTranslated.refund}</p>
                <p style={{ margin: 0 }}>{footerTranslated.privacy}</p>
              </li>
              <img src={vertical} alt='line' height={120} />
              <li
                className='social_networks'
                style={FooterMobileStyles.socialNetworks}
              >
                <img
                  alt=''
                  src={instaIcon}
                  style={{ alignSelf: 'center', width: '38px' }}
                />
                <img
                  alt=''
                  src={tiktokIcon}
                  style={{ alignSelf: 'center', width: '38px' }}
                />
              </li>
            </ul>
          </div>
          <p style={FooterStyles.copyrightMob}>
            &copy; 2023 Cut or die. All rights reserved.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
