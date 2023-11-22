import { FooterStyles } from './Footer.styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import vertical from '../../assets/images/vertical.svg';
import langIcon from '../../assets/images/langIcon.svg';
import coin from '../../assets/images/coin.svg';
import hryvniaWhite from '../../assets/images/hryvniaWhite.svg';
import euroWhite from '../../assets/images/euroWhite.svg';
import dollarWhite from '../../assets/images/dollarWhite.svg';
import hryvniaGray from '../../assets/images/hryvniaGray.svg';
import euroGray from '../../assets/images/euroGray.svg';
import dollarGray from '../../assets/images/dollarGray.svg';
import './Footer.css';
import instaIcon from '../../assets/images/instaIcon.svg';
import tiktokIcon from '../../assets/images/tiktokIcon.svg';

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
          <p
            style={{
              color: 'rgb(85,85,83)',
              fontSize: '15px',
              marginTop: '0.4rem',
            }}
          >
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
              <p style={{ margin: 0 }}>{footerTranslated.termsofUse}</p>
              <p style={{ margin: 0 }}>{footerTranslated.refund}</p>
              <p style={{ margin: 0 }}>{footerTranslated.privacy}</p>
            </li>
            <img src={vertical} alt='line' height={220} />
            <li className='social_networks' style={FooterStyles.socialNetworks}>
              <img
                src={instaIcon}
                style={{ alignSelf: 'center', width: '76px' }}
              />
              <img
                src={tiktokIcon}
                style={{ alignSelf: 'center', width: '69px' }}
              />
            </li>
            <img src={vertical} alt='line' height={220} />
            <li className='currency_language'>
              <div style={FooterStyles.currency}>
                <img src={coin} alt='coin' width={54} style={{}} />
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
                      width={32}
                      src={props.currency === 'usd' ? dollarWhite : dollarGray}
                    />
                  </button>
                </div>
              </div>
              <div style={FooterStyles.language}>
                <img src={langIcon} width={54} style={{}} />
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
  );
};
