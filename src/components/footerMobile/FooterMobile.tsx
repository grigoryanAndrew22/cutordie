import { FooterMobileStyles } from './FooterMobile.styles';
import vertical from '../../assets/images/vertical.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import coin from '../../assets/images/coin.svg';
import hryvnia from '../../assets/images/hryvnia.svg';
import euro from '../../assets/images/euro.svg';
import dollar from '../../assets/images/dollar.svg';
import '../footerMobile/FooterMobile.css';

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

export const FooterMobile = (props: any) => {
  const footerTranslated =
    props.language === 'en' ? footerLangs.en : footerLangs.ua;

  return (
    <div className='footer-section-mobile' style={FooterMobileStyles.wrapper}>
      <div style={FooterMobileStyles.footerSection}>
        <div className='logo_part' style={FooterMobileStyles.logoPart}>
          <div style={{ width: '50%' }}>
            <img
              src={require('../../assets/images/footerLogo.png')}
              alt='logo'
              width={250}
              height={183}
            />
          </div>
          <div className='currency_language'>
            <div style={FooterMobileStyles.currency}>
              <img src={coin} alt='coin' width={35} />
              <button
                style={{
                  border: 'none',
                  color: props.currency === 'uah' ? 'inherit' : '#808080',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <img src={hryvnia} alt='hryvnia' height={28} width={28} />
              </button>
              <button
                style={{
                  border: 'none',
                  color: 'inherit',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <img src={euro} alt='euro' height={25} width={25} />
              </button>
              <button
                style={{
                  border: 'none',
                  color: 'inherit',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <img src={dollar} alt='dollar' height={30} width={30} />
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
          </div>
        </div>
        <div className='info_part' style={{ width: '100%' }}>
          <ul style={FooterMobileStyles.footerInfo}>
            <li className='contacts' style={FooterMobileStyles.infoItem}>
              <p style={{ margin: 0 }}>{footerTranslated.contacts}</p>
              <p style={{ margin: 0 }}>{footerTranslated.about}</p>
              <p style={{ margin: 0 }}>FAQ</p>
            </li>
            <img src={vertical} alt='line' height={190} />
            <li className='policy' style={FooterMobileStyles.infoItem}>
              <p style={{ margin: 0 }}>{footerTranslated.termsofUse}</p>
              <p style={{ margin: 0 }}>{footerTranslated.refund}</p>
              <p style={{ margin: 0 }}>{footerTranslated.privacy}</p>
            </li>
            <img src={vertical} alt='line' height={190} />
            <li
              className='social_networks'
              style={FooterMobileStyles.socialNetworks}
            >
              <InstagramIcon sx={{ fontSize: '41px' }} />
              <YouTubeIcon sx={{ fontSize: '41px' }} />
            </li>
          </ul>
        </div>
        <p style={{ color: '#808080', fontSize: '15px', textAlign: 'center' }}>
          &copy; 2023 Cut or die. All rights reserved.
        </p>
      </div>
    </div>
  );
};

{
  /* <p style={{ color: '#808080', fontSize: '15px' }}>
&copy; 2023 Cut or die. All rights reserved.
</p> */
}
