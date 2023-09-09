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
import GooglePayBtn from './GooglePayBtn';

const footerLangs = {
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
    <div className='footer-section' style={FooterStyles.wrapper}>
      <div style={FooterStyles.footerSection}>
        <div className='logo_part' style={FooterStyles.logoPart}>
          <img
            src={require('../../assets/images/footerLogo.png')}
            alt='logo'
            width={250}
            height={183}
          />
          <p style={{ color: '#808080', fontSize: '15px' }}>
            &copy; 2023 Cut or die. All rights reserved.
          </p>
        </div>
        <div className='info_part' style={{ width: '80%' }}>
          <ul style={FooterStyles.footerInfo}>
            <li className='contacts' style={FooterStyles.infoItem}>
              <p style={{ margin: 0 }}>{footerTranslated.contacts}</p>
              <p style={{ margin: 0 }}>{footerTranslated.about}</p>
              <p style={{ margin: 0 }}>FAQ</p>
            </li>
            <img src={vertical} alt='line' height={190} />
            <li className='policy' style={FooterStyles.infoItem}>
              <p style={{ margin: 0 }}>{footerTranslated.termsofUse}</p>
              <p style={{ margin: 0 }}>{footerTranslated.refund}</p>
              <p style={{ margin: 0 }}>{footerTranslated.privacy}</p>
            </li>
            <img src={vertical} alt='line' height={190} />
            <li className='social_networks' style={FooterStyles.socialNetworks}>
              <InstagramIcon sx={{ fontSize: '41px' }} />
              <YouTubeIcon sx={{ fontSize: '41px' }} />
            </li>
            <img src={vertical} alt='line' height={190} />
            <li className='currency_language' style={{ width: '15%' }}>
              <div style={FooterStyles.currency}>
                <img src={coin} alt='coin' width={35} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '70%',
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
                      padding: '1px 8px',
                    }}
                  >
                    <img
                      width={20}
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
                      padding: '1px 8px',
                    }}
                  >
                    <img
                      width={29}
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
                      padding: '1px 8px',
                    }}
                  >
                    <img
                      width={20}
                      src={props.currency === 'usd' ? dollarWhite : dollarGray}
                    />
                  </button>
                </div>
              </div>
              <div style={FooterStyles.language}>
                <img
                  src={langIcon}
                  width={33}
                  height={33}
                  style={{ paddingLeft: '1.3px' }}
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
                  }}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};